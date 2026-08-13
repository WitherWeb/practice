// Вход:
const nums = [5, 1, 9, 3, 7];
const min = 3;
const max = 7;

const filterRange = (nums, min, max) => {
  let result = []
  nums.forEach((el) => {
    if(el >= min && el <= max) {
      result.push(el)
    }
  })
  return result
}

// Вызов:
const result = filterRange(nums, min, max);

console.log(result)

// Ожидаемый результат:
const expected = [5, 3, 7];