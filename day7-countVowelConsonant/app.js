function countVowelConsonant(str) {
    // Solution 1
    const rgx = /[aeiou]/ig
    const vowelsSum = str.match(rgx).length // length of vowels array * 1
    const consonantsSum = (str.length - vowelsSum) * 2 // consonants are all chars but vowels
    return consonantsSum + vowelsSum // return the final sum

    // Solution 2
    //   let result = 0
    //   const rgx = /[aeiou]/i
    //   str.split('').forEach((char)=>{
    //       if (rgx.test(char)) result+=1
    //       else result+=2
    //   })
    //   return result

    // Solution 3
    //   const rgx = /[aeiou]/i
    //   return str.split('').reduce((accumulatedValue, currentValue)=>{
    //      if (rgx.test(currentValue)) {
    //          return accumulatedValue+=1}
    //      else {
    //          return accumulatedValue+=2}
    //   },0)  
}