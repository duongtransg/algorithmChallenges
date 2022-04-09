//find longest duplicated pattern from beginning
function findLongestFromBeginning(str1, str2) {
  let arr1 = [...str1];
  let arr2 = [...str2];

  let dupChars = [];
  let flag = true;
  arr1.forEach((item, index) => {
    item !== arr2[index] ? (flag = false) : null;
    item === arr2[index] && flag == true ? dupChars.push(item) : null;
  });

  return dupChars.join("");
}

//find longest duplicated pattern in 02 strings
function searchPattern(str1, str2) {
  let arr1 = [...str1];
  let arr2 = [...str2];

  let length = arr1.length > arr2.length ? arr1.length : arr2.length;
  let output = [];
  // let flag = false
  arr1.forEach((item, index) => {
    let arr2Indexes = [];
    arr2.forEach((item2, index2) =>
      item2 == item ? arr2Indexes.push(index2) : null
    );

    arr2Indexes.forEach((item2, index2) => {
      let _output = "";
      //flag to control continuous add pattern
      let flag = true;
      for (let i = index, j = item2; i < arr1.length; i++, j++) {
        let offSet = i - index;
        //stop add character after one character is not duplicated
        arr1[i] !== arr2[j] ? (flag = false) : null;
        arr1[i] == arr2[j] && flag == true ? (_output += arr1[i]) : null;
      }

      output.push(_output);
    });
  });
  console.log(output);
  let lengthArr = output
    .map((item) => ({ item: item, length: item.length }))
    .sort((a, b) => a.length - b.length);
  return lengthArr[lengthArr.length - 1];
}

console.log(
  "longest pattern:",
  searchPattern("2222222222aaaaaaaaa", "aaaaaaaaa2222222")
); //1111

console.log(findLongestFromBeginning("aabbbaa", "aacccaa"));