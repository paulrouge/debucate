type AddressLocation = {
    lotteryContract?: string;
    ICON_lottery_contract?: string;
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
        ICON_lottery_contract: 'cxc7376d1e340776c333ea36c3a31421455bbe8d42', // Main Icon
    },
    2:{
        ICON_lottery_contract: 'cxc7376d1e340776c333ea36c3a31421455bbe8d42', // Test Lisbon
    },
};