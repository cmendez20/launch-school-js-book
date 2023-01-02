// for (let i = 10; i >= 0; i -= 1) {
//   i === 0 ? console.log('Launch!') : console.log(i); 
// }

// let greeting = 'Aloha!';
// for (let i = 0; i < 3; i++) {
//   console.log(greeting)
// }

// let array = [1, 2, 3, 4];
// let index = 0;

// while (index < array.length) {



  
//   console.log(array[index])
//   index++;
// }

// let i = 0;
// while (i <= 40) {
//   if (i % 2 !== 0) console.log(i);
//   i++
// }

let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];
for (const val of fish) {
  console.log(val);
  if (val === 'Nemo') break;
}