const genAffineSystem = (m, a, b) => {
    let arr = new Array(m).fill(undefined)
    return arr.map((i, idx) => (a*idx+b) % m)
  }
  
  const cesarCipher = (m, a, b) => {
    const alphabet = {
      0: 'A', 1: 'B', 2: 'C', 3: 'D', 4: 'E', 5: 'F', 6: 'G', 7: 'H', 8: 'I', 9: 'J', 10: 'K', 11: 'L', 12: 'M',
      13: 'N', 14: 'O', 15: 'P', 16: 'Q', 17: 'R', 18: 'S', 19: 'T', 20: 'U', 21: 'V', 22: 'W', 23: 'X', 24: 'Y', 25: 'Z'
    }
    let arr = new Array(m).fill(undefined)
    console.log(arr.map((item, idx) => alphabet[idx]), ' - исходный алфавит' )
    console.log(genAffineSystem(m, a, b).map((item, idx) => alphabet[item]), ' - зашифрованный алфавит')
    return genAffineSystem(m, a, b).map((item, idx) => alphabet[item])
  }
  
  cesarCipher(26, 3, 7)