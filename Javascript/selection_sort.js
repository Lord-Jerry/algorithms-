//Javascript implementation of selection sort

//recieves an array of unsorted integers, find's the smallest integer,
//and return it's index
const findSmallest = arr => {
  let smallest = arr[0];
  //postion of the smallest input array
  let position = 0;
  //iterate through input array and find the smallest integer
  arr.map((value, index) => {
    if (value < smallest) {
      smallest = value;
      position = index;
    }
  });
  return position;
};

//recieves an array of unsorted integer and return it sorted
const selectionSort = arr => {
  //create a copy of the input array, to prevent weird behaviours
  //when we modify the input array
  let temparr = arr.slice(0);
  //new aray for storing sorted items
  let newArr = [];

  for (let _i of arr) {
    //store index of smallest integer returned by the findSmallest function
    let index = findSmallest(temparr);
    //remove smallest interger from tempArr and push to newArr
    newArr.push(...temparr.splice(index, 1));
  }
  return newArr;
};

//Tests
let arr = [];
let temp = 10000;
while (temp > 0) {
  arr.push(temp);
  temp = temp - 1;
}
console.time('sort');
console.log(selectionSort(arr));
console.timeEnd('sort');