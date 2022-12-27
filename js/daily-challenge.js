
/* 
|Exercise 1:
|-----------------------------
|Remove Banana from the array.
|Sort the array in alphabetical order.
|Add “Kiwi” to the end of the array.
|Remove “Apples” from the array. Don’t use the same method as in part 1.
|Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
|At the end you should see this outcome:
*/
const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

fruits.shift("Banana") // remove Banana
fruits.sort() // sort fruits in alphabetical order
fruits.unshift("Kiwi") // add kiwi to the end
fruits.splice(1,1) // remove Apples from the array
fruits.reverse() // Sort the array in reverse orde

console.log(fruits);

/* 
|Exercise 2:
|-----------------------------
*/
const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

console.log(moreFruits);
console.log(moreFruits.length) // show the size of array: it output 2;
console.log(moreFruits[1][1][0]) // to show item orange;