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