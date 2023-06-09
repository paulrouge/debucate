/*
    This file contains the contract functions that are used in the frontend.
    This is done to avoid typos and to have a single source of truth for the contract functions.
*/

// Lottery contract functions as an example on how to use this file.
export enum LotteryFunctions {
    name = 'name',
    getLotteryIdCounter = 'getLotteryIdCounter',
    createNewLottery = 'createNewLottery',
    buyTickets = 'buyTickets',
    closeLottery = 'closeLottery',
    getLottery = 'getLottery',
    getOwnerLotteryTicket = 'getOwnerLotteryTicket',
    getLotteryWinner = 'getLotteryWinner',
    getLotteryPayout = 'getLotteryPayout', 
    getLotteryPrizePool = 'getLotteryPrizePool',
}
