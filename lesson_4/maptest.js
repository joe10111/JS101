let array = [1,1,1,1]
array = array.map((element) => {
  if(element === 1) {
    return undefined;
  }
})


function lessThan(upperLimit) {
  let numbers = [];
  let candidate = 1;

  while (candidate < upperLimit) {
    numbers.push(candidate);
  }

  return numbers;
}

console.log(lessThan(5))