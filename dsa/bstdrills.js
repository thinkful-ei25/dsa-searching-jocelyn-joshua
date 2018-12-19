/*
Imagine you are looking for a book in a library with a Dewey Decimal index. 
How would you go about it? Can you express this process as a searching algorithm?

find shelf range that fits my number
use intuition to narrow it down
when close
then traverse shelves until find match

prev shelf(113-123.11)
(this shelf is 123.12-125.7890)
  [123.12][123.34][123.64][123.78][123.890][124.1213][124.456][125.7890]
(next shelf125.8-130.2)
*/


const BST = require('./BST');
let profit = [128, 97, 121, 123, 98, 97, 105, 111, 3];
let treeData = "25 15 50 10 24 35 70 4 12 18 31 44 66 90 22";
/*
                            25
                            /\
                          15     50
                         /  \   /  \
                        10  24 35   70
                      /  \  /\ /\   /\
                     4   12 18 31 44 66 90
                      \
                       22
*/
treeData = treeData.split(' ');
let bst = new BST();
for (let i = 0; i < treeData.length; i++) {
  bst.insert(parseInt(treeData[i]));
}

let profitBST = new BST();
for (let i = 0; i < profit.length; i++) {
  profitBST.insert(i, profit[i]);
}

function maxAdd(prices){

  let maxSum = 0;
  let currentSum = 0;
  for(let i = 1; i < prices.length; i++){
    const priceChange = prices[i] - prices[i -1];
    currentSum += priceChange;
    if(currentSum < 0) currentSum = 0;
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}


function main() {
  // profitBST.inOrder();
  console.log(maxAdd(profit));
}

main();