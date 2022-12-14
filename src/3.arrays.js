/**
 * IndexOf: you should be able to determine the location of an item in an array
 * Example: 
 * arr = [1,2,3,5,6]
 * calling the function like 
 * indexoff(arr, 3); should return the index 2
 */
function indexOf(arr, item) {
  let index = -1;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] == item){
      index = i;
      break;
    }
    else{
      continue;
    }
  }
  return index;
}

// Sum: you should be able to sum the items of an array
// Example: arr = [1,2,3]   =>  6
function sum(arr) {
  let sum = 0;
  arr.forEach(element => {
    sum += element;
  });
  return sum;
}

// Filter: Should filter out all instances of a value from an array
// Example: filtering 2 out of [1,2,3,5,6,2,4,2] should return [1,3,5,6,4]
function filterOut(arr, item) {
  let filteredArray = arr.filter(arr => arr != item);
  return filteredArray;
}

// Append: you should be able to add an item to the end of an array
function append(arr, item) {
  arr.push(item);
  return arr;
}

// Truncate: you should be able to remove the last item of an array
// hint: pop, slice, splice would all work. Pay attention to the return value in the docs
function truncate(arr) {
  arr.pop();
  return arr;
}

// Concat: you should be able to join together two arrays
function concat(arr1, arr2) {
  let joined = arr1.concat(arr2);
  return joined;
}

// Insert: you should be able to add an item at the specified index of an array
// hint: use splice and pay attention to the return value
function insert(arr, item, index) {
  arr.splice(index,0,item);
  return arr;
}

// Square: you should be able to square each number in an array
// hint: use .map
// Example: [1,2,4,5] => [1,4,16,25]
function square(arr) {
  sqauredArr = arr.map(x => x*x);
  return sqauredArr;
}

module.exports = {
  indexOf,
  sum,
  filterOut,
  append,
  truncate,
  concat,
  insert,
  square
};