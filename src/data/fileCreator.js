import fs from 'fs';
import { readFile } from 'fs/promises';

let dataStr = '';

export const saveData = (players, limit) => {
  for (const [name, age] of Object.entries(players)) {
    dataStr += `"${name}": "${age}",`;
  }

  fs.writeFile(
    'last-game-data.json',
    `{${dataStr} "limit":${limit}}`,
    function (err) {
      //   console.log(err);
    }
  );
};

export const fetchData = async () => {
  let data = JSON.parse(await readFile('last-game-data.json', 'utf8'));
  return await data;
};

export const isFileExist = (filePath = 'last-game-data.json') => {
  try {
    if (fs.existsSync(filePath)) {
      return true;
    }
  } catch (err) {
    return false;
  }
};
