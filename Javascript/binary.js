/**
 * * #### NOTE :
 * * Implimentation of binary search in javascript
 * * #### TODO :
 * * should make it work with alphabets
 * @param { Array } - an array of elements to search through
 * @param { Number } - element to be found in the array
 */
const binary = (arr, item) => {
  count = count + 1;
  // get the average of the array's length
  const middle = Math.floor((arr.length)/2);
  let temp;

  // if item is not found
  if (arr.length === 1 && item !== arr[0]) return 'not found';
  
  // if item is found in the array 
  if (item === arr[middle]) return 'found';
  
  // check if the middle element in the array, 
  // is lesser than the item we are searching for
  // if yes, assign to ``temp`` from d middle of the array to the end 
  else if (arr[middle] < item) {
    temp = arr.slice(middle, arr.length);

  }else if (arr[middle] > item) {
    temp = arr.slice(0, middle);
  }

  //recursesively call itself with a new array ``temp``
  return binary(temp, item);
}

let count = 0;
let arr1 = [];
let temp =0;
while (arr1.length < 24763543) {temp++; arr1.push(temp);}
console.log(binary(arr1, 678964),count);