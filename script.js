// Вход:
const words = ['кот', 'пёс', 'кот', 'кот', 'пёс'];

const wordFreq = (words) => {
  return words.reduce((obj, value) => {
    if(!obj[value]){
      obj[value] = 1
    }else {
      obj[value] = obj[value] + 1
    }
    
    return obj
  }, {})
}

// Вызов:
const result = wordFreq(words);

console.log(result)

// Ожидаемый результат:
const expected = { 'кот': 3, 'пёс': 2 };