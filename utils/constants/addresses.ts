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
        // NFT_contract: '0x14270E64449B736b54781de99d11F655fb81f16D', 
        NFT_contract: '0x1be47c787cBaE190C6779e0d0931b0F9C0F09894', 
        BUSD_contract: '0xe46eC5a68381dc7edE298d62D02f9403edfd2136' 
    },
    // Sepolia ETH2 Testnet
    11155111:{ 
        
    }
};