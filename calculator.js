"use strict";
// Counter App in TypeScript (for browser)
// To use this file, rename it to .ts, compile with tsc, and include the output JS in an HTML file.
// Create the UI
const app = document.createElement('div');
app.className = 'container';
app.innerHTML = `
  <h1>Counter App</h1>
  <div id="counter" class="counter">0</div>
  <div class="buttons">
    <button id="increment">Increment</button>
    <button id="decrement">Decrement</button>
    <button id="reset">Reset</button>
  </div>
`;
document.body.appendChild(app);
// Add styles
const style = document.createElement('style');
style.textContent = `
  body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
  }
  .container {
    text-align: center;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  h1 {
    margin-bottom: 20px;
  }
  .counter {
    font-size: 3rem;
    margin: 20px 0;
  }
  .buttons button {
    padding: 10px 20px;
    margin: 5px;
    font-size: 1rem;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    transition: background 0.3s;
  }
  #increment {
    background: #4caf50;
    color: white;
  }
  #decrement {
    background: #f44336;
    color: white;
  }
  #reset {
    background: #2196f3;
    color: white;
  }
  .buttons button:hover {
    opacity: 0.8;
  }
`;
document.head.appendChild(style);
// Counter logic
const counter = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');
let count = 0;
function updateCounter() {
    counter.textContent = count.toString();
}
incrementBtn.addEventListener('click', () => {
    count++;
    updateCounter();
});
decrementBtn.addEventListener('click', () => {
    if (count > 0) {
        count--;
        updateCounter();
    }
});
resetBtn.addEventListener('click', () => {
    count = 0;
    updateCounter();
});
