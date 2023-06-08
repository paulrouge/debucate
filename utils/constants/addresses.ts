type AddressLocation = {
    NFT_contract?: string;
    BUSD_contract?: string;
};

export type ContractAddresses = {
    [chainId: number]: AddressLocation;
};

export const ContractAddresses:ContractAddresses = {
    // BSC Testnet
    97:{
        NFT_contract: '0xCBf6C3eF98561e130b3D28fd77c173c305CEbf15', 
        BUSD_contract: '0xe46eC5a68381dc7edE298d62D02f9403edfd2136' 
    },
    // Sepolia ETH2 Testnet
    11155111:{ 
        
    }
};