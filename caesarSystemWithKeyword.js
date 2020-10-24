const getInitialAlphabet = () => {
    return [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 
        'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ]
}

const getFilteredAlphabet = (keyword) => {
    return [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 
        'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ].filter((item) => !keyword.includes(item))
}

const cesarKeyWord = (keyword, k, phrase) => {
    let wordsArr = phrase.match(/([A-Z])\w+/g); // разбиение фразы на отдельные слова в массив
    const kw = keyword.toUpperCase(); // приведение всех букв слова к верхнему регистру
    const keywordSegment = kw.split(''); // преобразуем строку в массив
    const arr = [...keywordSegment, ...getFilteredAlphabet(keyword)]
    // Делаем сдвиг массива на величину k
    const encryptedAlphabet =  arr.map((_, idx, arr) => {
        return idx < k ? arr[arr.length + idx - k] : arr[idx - k]
    })

    const symbolsArr = getInitialAlphabet().map((item, idx) => {
        return [item, encryptedAlphabet[idx]]
    })
    const symbolsObj = Object.fromEntries(symbolsArr);

    return wordsArr.map((outherItem) => {
        return [...outherItem].map((innerItem) => symbolsObj[innerItem]).join('')
    }).join(' ')

}

console.log(cesarKeyWord('DIPLOMAT', 18, 'HELLO WORLD'))