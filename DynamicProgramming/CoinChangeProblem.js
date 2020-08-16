// que1) Coin Change | DP-7
// Given a value N, if we want to make change for N cents, 
// and we have infinite supply of each of S = { S1, S2, .. , Sm} valued coins, 
// how many ways can we make the change? The order of coins doesn’t matter.
// For example, for N = 4 and S = {1,2,3}, there are four solutions: {1,1,1,1},{1,1,2},{2,2},{1,3}.
// So output should be 4. For N = 10 and S = {2, 5, 3, 6}, 
// there are five solutions: {2,2,2,2,2}, {2,2,3,3}, {2,2,6}, {2,3,5} and {5,5}. So the output should be 5.

let NumberOfSolution = (coins, n, m) => {

    //Base case
    //1) do not include ny coin if n =0
    if(!n) { // n==0
        return 1;
    }

    if(m <= 0 && n>0) {
        return 0;
    }

    if(n<0) {
        return 0;
    }

    return NumberOfSolution(coins, n, m-1)+NumberOfSolution(coins, n-coins[m-1],m);

};

let n = 10; //sume to be
let coins = [2,3,5,6];
let numberofCoins = coins.length;
let sol = NumberOfSolution(coins, n, numberofCoins);

console.log("numberOfSolutions :: ", sol);