const isValidParenthesis = (s) => {
  const stack = [];
  const parenthesisMap = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (parenthesisMap.has(char)) {
      if (
        stack.length &&
        stack[stack.length - 1] === parenthesisMap.get(char)
      ) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
};

console.log(isValidParenthesis("((")); // false
console.log(isValidParenthesis("()[]{}")); // true
console.log(isValidParenthesis("(]")); // false
console.log(isValidParenthesis("([)]")); // false
console.log(isValidParenthesis("{[]}")); // true
