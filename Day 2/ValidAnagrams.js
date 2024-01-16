// https://leetcode.com/problems/valid-anagram/

// a = 'ada', b = 'aad'

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */



let isAnagram = function (s, t) {
  // initialise maps

  const hashMapS = new Map();
  const hashMapT = new Map();

  // base case

  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    // populate 1st hasMap
    if (hashMapS.has(s[i])) hashMapS.set(s[i], hashMapS.get(s[i]) + 1)
    else hashMapS.set(s[i], 1)
    // populate 2nd hasMap
    if (hashMapT.has(t[i])) hashMapT.set(t[i], hashMapT.get(t[i]) + 1)
    else hashMapT.set(t[i], 1)
  }

  for (let [k, v] of hashMapT) {
    if (v !== hashMapS.get(k)) {
      return false;
    }
  }
  return true;
}

console.log(isAnagram('ada', 'aad'));




// (a,2)(d,1)           (d,1)(a,2)