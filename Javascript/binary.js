let steps = 0;
/**
 * @param { Array<Integer | String>} - an array of elements to search through
 * @param { Integer | String } - element to be found in the array
 */
const binary = (arr, item) => {
  // increment step counter
  steps += 1;
  if (arr.length === 1 && item !== arr[0]) return "not found";

  const middle = Math.floor(arr.length / 2);

  if (item === arr[middle]) return "found";
  if (arr[middle] < item) return binary(arr.slice(middle, arr.length) , item);
  if (arr[middle] > item) return binary(arr.slice(0, middle), item);

  return;
};

// tests
let arr1 = [];
let temp = 0;
while (arr1.length < 24763543) {
  temp++;
  arr1.push(temp);
}
console.time("search");
console.log(`${binary(arr1, 678964)} in ${steps} steps`);
console.timeEnd("search");


