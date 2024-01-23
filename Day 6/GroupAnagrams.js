/**
 * Hash Map
 * Time O(N * K) | Space O(N * K)
 * https://leetcode.com/problems/group-anagrams/
 * @param {string[]} words
 * @return {string[][]}
 */
var groupAnagrams = (words, map = new Map()) => {
  if (!words.length) return [];

  groupWords(words, map);    /* Time O(N * K) | Space O(N * K) */

  return [...map.values()];/* Time O(N)     | Space O(N * K) */
}

var groupWords = (words, map) => {
  for (let i = 0; i < words.length; i++) {/* Time O(N) */
    const hash = getHash(words[i]); /* Time O(K) | Space O(1) */
    // 111000...
    const values = map.get(hash) || [];
    // ['abc', 'cba']
    values.push(words[i]);          /*           | Space O(N) */
    map.set(hash, values);          /*           | Space O(N * K) */
  }
}
// '111000...'
const getHash = (word) => {
  const frequency = new Array(26).fill(0);

  for (let j = 0; j < word.length; j++) {/* Time O(K) */
    const charCode = getCode(word[j]);/* Time O(1) | Space (1) */
    frequency[charCode]++;         /*           | Space O(1) */
  }

  return buildHash(frequency)
}

const getCode = (char) => char.charCodeAt(0) - 'a'.charCodeAt(0);

const buildHash = (frequency) => frequency.toString();

// words = ['abc', 'cba', 'till']

// output = [['abc', 'cba'], ['till']]
