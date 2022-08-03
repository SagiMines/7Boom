import { start7BoomGame } from './src/app.js';
import promptSync from 'prompt-sync';

const prompt = promptSync();
const players = {};
let counter = 0;
let proceed;
do {
  counter += 1;
  console.log(`Hello ${counter}# player!`);
  const name = prompt('Please enter your name: ');
  const age = prompt('Please enter your age: ');
  proceed = Number(
    prompt(
      'If your done (only after atleat 2 players) press 0. if you want to continue press 1.\n'
    )
  );
  while (typeof proceed !== 'number') {
    proceed = Number(prompt('Please enter ONLY 1 or 0.\n'));
  }
  players[name] = age;
} while (proceed || counter < 2);
const limit = prompt('Please enter the limit you want: ');

start7BoomGame(Number(limit), players);
