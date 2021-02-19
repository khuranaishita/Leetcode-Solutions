/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if(coins==null||coins.length==0){
            return -1;
        }
    if(amount==0){
            return 0;
        }
     const table = Array(amount + 1).fill(Infinity);
      table[0] = 0;
    for(let i=1;i<=amount;i++){
            for(let j=0;j<coins.length;j++){
                if(coins[j]<=i){
                    table[i]=Math.min(table[i-coins[j]]+1,table[i]);
                }
            }
        }
    if(table[amount]== Infinity){
            return -1;
        }else{
            return table[amount];
        }
        
    }
