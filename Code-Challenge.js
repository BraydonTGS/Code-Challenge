const findSum = function(array) {
   let sum = array.reduce((a, b) => {
    return a + b
  }, 0)
  return sum;
};

const findFrequency = function(array) {
  let mostF = 0;
  let max = 0;
  let lastCount = array.length;
  let letterMF;
  let letterLF;
  for (let i = 0; i < array.length; i++) {
    for (let y = 0; y < array.length; y++) {
      if (array[i] === array[y])
        max++;
      //console.log(max, `Adding To Max for Letter ${array[i]}`)
    }
    if (mostF < max) {
      mostF = max
      //console.log(mostF, 'Most Frequent')
      letterMF = array[i]
      //console.log(letterMF, 'Most Freq letter')
    } 
    if (max < lastCount) {
      lastCount = max
      //console.log(lastCount, 'Last Count')
      letterLF = array[i]
      //console.log(letterLF, 'least freq letter')

    }

    max = 0;
  }

  return { most: letterMF, least: letterLF }
};

const isPalindrome = function(str) {
   const string = str.toLowerCase();
    const reverseString = string.split('').reverse().join('')
    return reverseString === string
};

const largestPair = function(array) {
    let a = 0
  let b = 0
  let c = 0

  for (let i = 0; i < array.length; i++) {
      a = array[i]
      b = array[ i+ 1]

      if(a * b > c) {
          c = a * b; 
      }; 
      
  }; 
  return c
};

const removeParenth = function(str) {
    return str.replace(/ *\([^)]*\) */g, "")
     
};

const scoreScrabble = function(str) {
      const score = {"a": 1, "c": 3, "b": 3, "e": 1, "d": 2, "g": 2, 
        "f": 4, "i": 1, "h": 4, "k": 5, "j": 8, "m": 3, 
        "l": 1, "o": 1, "n": 1, "q": 10, "p": 3, "s": 1, 
        "r": 1, "u": 1, "t": 1, "w": 4, "v": 4, "y": 4, 
        "x": 8, "z": 10}
    let total = 0
    str = str.toLowerCase()

    for(let i of str) {
        total += score[i]
    }
    return total
};
