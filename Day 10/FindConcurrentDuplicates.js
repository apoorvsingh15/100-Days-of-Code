// Problem Statement:

// Write a method to find the max. distance between two occurrences of a
// char in a string.

// Distance is the no. of unique characters (excluding whitespaces and
// searched character) between two occurrences of the searched character.
// Example 1:

// SearchLetter(“my name is granar”, “a”);

// Output : 7 (i.e. m,e,i,s,g,r,n)

// Example 2:

// SearchLetter(“the capital of minnesota is saint paul”, “y”);

// Output : -1 (no. occurrence of “y”)

// Example 3:

// SearchLetter(“quick brown fox jumps over the lazy dog”, “a”);

// Output : -1 (only 1 occurrence of “a”)


const findDuplicate = (str, char) => {

  let trimmed = str.replace(/ /g, '');
  let hashMap = new Map();
  let res = 0;
  let result = '';
  let toSubstract = 0;

  if (trimmed.length > 1) {
    for (let i = 0; i < trimmed.length; i++) {
      if (hashMap.has(trimmed[i])) {
        hashMap.set(trimmed[i], [...hashMap.get(trimmed[i]), i])
      } else {
        hashMap.set(trimmed[i], [i])
      }
    }

    let getNeededArr = hashMap.get(char);

    if (getNeededArr?.length > 1) {
      toSubstract = getNeededArr?.length - 2;
      res = trimmed?.substring(getNeededArr[0] + 1, getNeededArr[getNeededArr?.length - 1]);
      result = res.length - toSubstract;
    } else {
      result = -1;
    }

  } else {
    result = -1
  }
  return result;
}


console.log(findDuplicate('my name is granar', 'a'))  // 7
console.log(findDuplicate('gdfgkjgsjg', 'g'))  // 6