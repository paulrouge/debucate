// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

// A helper to convert uints to a string.
library UintToString {
    function toString(uint256 value) internal pure returns (string memory) {
        // Special case for 0 to avoid returning an empty string
        if (value == 0) {
            return "0";
        }

        uint256 temp = value;
        uint256 digits;

        while (temp != 0) {
            digits++;
            temp /= 10;
        }

        bytes memory buffer = new bytes(digits);

        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));
            value /= 10;
        }

        return string(buffer);
    }
}

contract DecubateNFT is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    using UintToString for uint256;

    Counters.Counter private _tokenIdCounter;

    uint public MINTFEE = 10 * 10 ** 18; // atm 0.01 bnb
    address public bUSDContract = 0xe46eC5a68381dc7edE298d62D02f9403edfd2136;
    IERC20 public bUSDToken = IERC20(bUSDContract);

    constructor() ERC721("Decubate NFT", "dNFT") {
        _tokenIdCounter.increment(); // init at token id 1
    }

    function _baseURI() internal pure override returns (string memory) {
        return "https://idogelabs.mypinata.cloud/ipfs/QmZZAz8n7L5PqYUhQKmtP6mEi3EjZ85wVvhUTZZhJsomHe/";
    }

    function uintToString(uint256 value) internal pure returns (string memory) {
        return value.toString();
    }

    function safeMint(address to) external payable {
        require(bUSDToken.allowance(msg.sender,address(this)) >= MINTFEE, "allowance too low!");
        require(_tokenIdCounter.current() <= 20, "No more mints left :(");
        uint256 tokenId = _tokenIdCounter.current();

        bUSDToken.transferFrom(msg.sender, owner(), MINTFEE);

        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uintToString(tokenId));
    }

    function getAllTokensOwned(address adr) external view returns (uint[] memory) {
        uint current = _tokenIdCounter.current();
        uint balance = this.balanceOf(adr);
        uint[] memory arr = new uint[](balance);
        uint indexHelper = 0;

        for (uint i = 1; i < current; i++) {
            address owner = this.ownerOf(i);
  
            if (owner == adr) {
                arr[indexHelper] = i;
                indexHelper ++;
            }
        }

        return arr;
    }
    
    // The following functions are overrides required by Solidity.
    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}