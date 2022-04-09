//create an array includes all binary number for a fixed length. convert those array to UNICODE. print all UTF-16 code units
/*HOW TO: 
binary length = 1: [0,1]
length = 2: [00, 10, 01, 11] => add 0 and 1 to every Item of array of length = 1 
length = 3: => add 0, 1 to every ITEM OF array with length =2 
repeat until length = given number
filter to get only item with length = given number
*/

function createBinaryArray(n) {
  let binaryArray = [];

  for (let i = 2; i <= n; i++) {
    binaryArray.length == 0 ? binaryArray.push("0", "1") : null;
    binaryArray.forEach((item) => {
      if (item.length == i - 1) {
        binaryArray.push("0" + item);
        binaryArray.push("1" + item);
      }
    });
  }
  return binaryArray.filter((item) => item.length == 8); //return all n bits binary number
}

let binaryArray = createBinaryArray(8);
//convert binary number to array of characters
console.log(
  "PRINT ALL CHARACTER WITH 8 BITS SORT ASCENDING:",
  binaryArray
    .filter((item) => item.length == 8)
    .sort((a, b) => +a - +b)
    .map((item) => String.fromCharCode(parseInt(item, 2)))
    .join(",")
);

//SORT CHARACTER IN A STRING
let strToSort = "azfgk6bncaaa12345";
console.log(strToSort.split("").sort().join("")); //123456aaaabcfgknz
