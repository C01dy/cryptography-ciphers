const output_1 = document.querySelector('.output-1');
const output_2 = document.querySelector('.output-2');
const output_3 = document.querySelector('.output-3');
const output_4 = document.querySelector('.output-4');
const result = document.querySelector('.result');
const doublePerInput = document.querySelector('.doublePermutationInput');
const initialPhrase = document.querySelector('.initial-phrase');

const shuffleArr = (arr) => {
  let arrCopy = arr.slice();
  let shuffled = arrCopy.sort(() => Math.random() - 0.5);
  if (JSON.stringify(shuffled) === JSON.stringify(arr)) {
    return shuffleArr(arr);
  }
  return shuffled;
};

const shuffleRows = (arr) => {
  return arr.sort();
};

const shuffleCols = (arr, colKeys) => {
  let len = colKeys.length;
  let cols = [];

  for (let i = 0; i < len; i++) {
    cols.push(arr.map((item) => (item[1][i] ? item[1][i] : '_')));
  }

  const colsWithKeys = cols.map((item, idx) => [colKeys[idx], item]);
  const shuffledCols = colsWithKeys.slice().sort();

  for (let i = 0; i < colsWithKeys.length; i++) {
    output_3.innerHTML += `<div class="col">${JSON.stringify(colsWithKeys[i]).replace(/(\W)/gi, '')}</div>`
  }

  for (let i = 0; i < shuffledCols.length; i++) {
    output_4.innerHTML += `<div class="col">${JSON.stringify(shuffledCols[i]).replace(/(\W)/gi, '')}</div>`
    result.innerHTML += `<span class="col">${JSON.stringify(shuffledCols[i][1]).replace(/(\W)/gi, '')}</span>`
  }
};

const doublePermutationCipher = (colKeys, phrase) => {
  phrase.toUpperCase();
  const re = new RegExp(
    `(.{${colKeys.length}})` + '|' + `(.{0,${colKeys.length}})`,
    'gim'
  );
  const phraseSegments = phrase.match(re);
  const randomIdxs = shuffleArr(
    phraseSegments.map((_, idx) => idx).slice(0, phraseSegments.length - 1)
  );
  phraseSegments.pop();

  const rows = phraseSegments.map((item, idx) => {
    return [randomIdxs[idx], item.split('')];
  });

  shuffleCols(shuffleRows(rows.slice()), colKeys);
  for (let i = 0; i < rows.length; i++) {
    output_1.innerHTML += `<div>${JSON.stringify(rows[i]).replace(/(\W)/gi, '')}</div>`
  }

  for (let i = 0; i < rows.length; i++) {
    output_2.innerHTML += `<div>${JSON.stringify(shuffleRows(rows.slice())[i]).replace(/(\W)/gi, '')}</div>`
    
  }

  initialPhrase.innerHTML += `<span>${phrase}</span>`


};

doublePermutationCipher([1, 3, 2, 5, 4], 'SYSTEM CODE WAS CHANGED');
