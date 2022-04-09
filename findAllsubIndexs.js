//FIND ALL INDEXES OF SUB STRING
console.log("FIND ALL INDEXES OF SUB STRING"); //24
function findAllIndex(str, subStr) {
  let indexes = [];
  let strArr = [...str];
  let subStrArr = [...subStr];

  let length = subStr.length;
  let result = [];
  strArr.forEach((item, index) => {
    let hasIndex = { index: index, result: true };
    for (let i = 0; i < length; i++) {
      subStrArr[i] !== strArr[index + i] ? (hasIndex.result = false) : null;
    }
    result.push(hasIndex);
  });

  indexes = result
    .filter((item) => item.result == true)
    .map((item) => item.index);
  return indexes;
}

console.log(findAllIndex("aeabbbaaccccccaeaa", "aea")); //[0]