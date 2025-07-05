// Console-based Counter App in TypeScript
import * as readline from 'readline';

let count = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function showMenu() {
  console.log('\nCounter App');
  console.log('Current count:', count);
  console.log('1. Increment');
  console.log('2. Decrement');
  console.log('3. Reset');
  console.log('4. Exit');
  rl.question('Choose an option: ', handleInput);
}

function handleInput(input: string) {
  switch (input.trim()) {
    case '1':
      count++;
      break;
    case '2':
      if (count > 0) count--;
      break;
    case '3':
      count = 0;
      break;
    case '4':
      rl.close();
      console.log('Goodbye!');
      return;
    default:
      console.log('Invalid option.');
  }
  showMenu();
}

showMenu();
