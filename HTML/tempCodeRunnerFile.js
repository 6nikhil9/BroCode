const arr = [5, 12, 8, 130, 44];
 arr.sort((a,b) => a-b)
//  arr.sort((a,b) => b-a)
 console.log(arr)
const found = arr.find(num => num > 10);
console.log(found);