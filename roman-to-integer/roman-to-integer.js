/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
const map = {
  I: {
    val: 1,
    exception: {
      V: 4,
      X: 9,
    },
  },
  V: { val: 5, exception: {} },
  X: {
    val: 10,
    exception: {
      L: 40,
      C: 90,
    },
  },
  L: { val: 50, exception: {} },
  C: {
    val: 100,
    exception: {
      D: 400,
      M: 900,
    },
  },
  D: { val: 500, exception: {} },
  M: { val: 1000, exception: {} },
};

let result = 0;

for (let i = 0; i < s.length; i++) {
  const currentCharObj = map[s[i]];
  const nextChar = s[i + 1];

  if (currentCharObj.exception[[nextChar]]) {
    result += currentCharObj.exception[[nextChar]];
    i++;
  } else {
    result += currentCharObj.val;
  }
}
return result;

};