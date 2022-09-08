let test1 = [3, 2, 1, 6, 4, 5];
let test2 = [6, 5, 4, 3, 2, 1];
let test3 = [1, 2, 3, 4, 5, 6];
let test4 = [];
let test5 = [2, 2, 2, 2, 1];
// edit here

function sort(input) {
  for (let i = input.length; i > 0; i--) {
    for (let a = 0; a < i; a++) {
      let c = input[a];
      let b = input[a + 1];

      if (c > b) {
        let compare = input[a] - input[a + 1];
        input[a] = input[a + 1];
        input[a + 1] = input[a] + compare;
      }
    }
  }
  return input;
}

console.log(sort(test2));
// dont edit here

function isSorted(input) {
  let flag = true;
  for (let i = 0; i < input.length - 1; i++) {
    if (input[i] > input[i + 1]) {
      flag = false;
      break;
    }
  }
  return flag;
}

console.log(isSorted(sort(test1)));
console.log(isSorted(sort(test2)));
console.log(isSorted(sort(test3)));
console.log(isSorted(sort(test4)));
