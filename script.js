//Подсчёт чётных и нечётных

const nums = [1, 2, 3, 4, 5, 6];

const countEvenOdd = () => {
  let even = 0
  let add = 0
    nums.forEach((el) => {
        if(el % 2 === 1) {
          even++
        }else{
          add++
        }
    })
  return {even: even, add: add}
}

// Вызов:
const result = countEvenOdd(nums);

// Ожидаемый результат:
const expected = { even: 3, odd: 3 };

//Поиск минимума и максимума

// Вход:
const nums = [10, -3, 7, 0];

const minMax = (nums) => {
  if(nums.lenght === 0) {
    return {min: null, max: null}
  }else {
    return {min: Math.min(...nums), max: Math.max(...nums)}
  }
 
}
// Вызов:
const result = minMax(nums);

console.log(result)

// Ожидаемый результат:
const expected = { min: -3, max: 10 };