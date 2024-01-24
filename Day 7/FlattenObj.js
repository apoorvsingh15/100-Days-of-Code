

// Declare an object
let obj = {
  Company: "GeeksforGeeks",
  Address: "Noida",
  contact: +91 - 999999999,
  mentor: {
    HTML: {
      css:
      {
        js:
          "GFG"
      }
    },
    CSS: "GFG",
    JavaScript: "GFG"
  }
};

// Flatten this object so it looks like this.

// {
//   Company: 'GeeksforGeeks',
//   Address: 'Noida',
//   contact: -999999908,
//   'mentor.HTML.css.js': 'GFG',
//   'mentor.CSS': 'GFG',
//   'mentor.JavaScript': 'GFG'
// }


const flattenObj = (obj) => {
  // initialise a result obj
  const result = {}

  for (let i in obj) {
    if (typeof obj[i] === 'object' && !Array.isArray(obj[i])) {
      const temp = flattenObj(obj[i]);  // recursion -  n depth
      for (let j in temp) {
        result[i + '.' + j] = temp[j];
      }
    } else {
      result[i] = obj[i];
    }
  }
  // return the result
  return result;

}

console.log(flattenObj(obj));
