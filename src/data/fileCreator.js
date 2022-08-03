import fs from 'fs';
let dataStr = '';
export const saveData = players => {
  let counter = 0;
  for (const [name, age] of Object.entries(players)) {
    dataStr += `"${name}": "${age}"`;
    if (counter !== Object.entries(players).length - 1) {
      dataStr += ',';
    }
    counter += 1;
  }

  fs.writeFile('last-game-data.json', `{${dataStr}}`, function (err) {
    console.log(err);
  });
};
