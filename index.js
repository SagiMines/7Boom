import { start7BoomGame } from './src/app.js';
import promptSync from 'prompt-sync';
import { saveData, isFileExist, fetchData } from './src/data/fileCreator.js';

const prompt = promptSync();
const players = {};
let limit;
let counter = 0;
let proceed;
let loadLastGame;

if (isFileExist()) {
  loadLastGame = prompt(
    'To load last saved game press 1.\nTo create a new game press 0: '
  );
  while (loadLastGame !== '1' && loadLastGame !== '0') {
    loadLastGame = prompt('Please enter ONLY 1 or 0.\n');
  }
  loadLastGame = Number(loadLastGame);
}

if (loadLastGame) {
  loadLastGame = await fetchData();
  //   const loadLastGame = require('./src/data/last-game-data.json');

  for (const [key, value] of Object.entries(loadLastGame)) {
    if (key !== 'limit') {
      players[key] = value;
    } else {
      limit = value;
    }
  }
} else {
  do {
    counter += 1;
    console.log(`Hello ${counter}# player!`);
    const name = prompt('Please enter your name: ');
    const age = prompt('Please enter your age: ');
    proceed = prompt(
      'If your done (only after atleat 2 players) press 0. if you want to continue press 1.\n'
    );
    while (proceed !== '1' && proceed !== '0') {
      proceed = prompt('Please enter ONLY 1 or 0.\n');
    }
    proceed = Number(proceed);
    players[name] = age;
  } while (proceed || counter < 2);
  limit = prompt('Please enter the limit you want: ');

  let toSave = prompt(
    'Do you want to save these setting for the next game (1-yes, 0-no)? \n'
  );
  while (toSave !== '1' && toSave !== '0') {
    toSave = prompt('Please enter ONLY 1 or 0.\n');
  }
  toSave = Number(toSave);

  if (toSave) {
    saveData(players, limit);
  }
}

start7BoomGame(Number(limit), players);
