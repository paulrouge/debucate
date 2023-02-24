type AddressLocation = {
    lotteryContract?: string;
    ICON_test_contract?: string;
};

export type ContractAddresses = {
    [chainId: number]: AddressLocation;
};

export const ContractAddresses:ContractAddresses = {
    552:{
        lotteryContract: '0x5FbDB2315678afecb367f032d93F642f64180aa3', // Main Snow
    },
    553:{
        lotteryContract: '0x6F9679BdF5F180a139d01c598839a5df4860431b', // Test Arctic
    },
    1:{
        ICON_test_contract: '0x6F9679BdF5F180a139d01c598839a5df4860431b', // Test Arctic
    },
};