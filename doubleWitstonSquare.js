const doubleWitstonSquate = (msg) => {
    const biagrams = msg.match(/\w{2}|\w{1}/g).map(item => item.length === 1 ? item += '_' : item)
    const leftSquare = [
        'A', 'U', 'H', 'Q', 'G',
        'V', 'B', 'T', 'R', 'F',
        'N', 'O', 'P', 'E', 'S',
        'W', 'C', 'D', 'X', 'Y',
        '.', '_', 'L', 'I', 'J',
        'K', ':', ',', 'M', 'Z'
    ]
    const rightSquare = [
        'N', 'O', 'F', 'G', 'R',
        'S', '.', 'P', '_', 'Q',
        'D', 'A', 'E', 'H', 'I',
        'M', 'T', 'B', 'U', 'V',
        'C', 'X', 'Y', 'W', ',',
        'L', ':', 'Z', 'K', 'J'
    ]
    
    const resArr = biagrams.map((item, idx) => {
        // Получаем индексы второй буквы с левого и правого квадратов
        const rightSecondIdx = rightSquare.indexOf(item[1])
        const leftFirstIdx = leftSquare.indexOf(item[0])

        // Замена первого символа
        const newFirstSymbol = rightSquare[leftFirstIdx]

        // Замена второго символа
        const newSecondSymbol = leftSquare[rightSecondIdx]
        return newFirstSymbol + newSecondSymbol
    })

    return resArr;
}
console.log(doubleWitstonSquate('HELLO WORLD'))
