import NumberGenerator from './publishers/numberGenerator.js';
import { find7Check } from './clients/find7.js';
import { multiple7Check } from './clients/multiple7.js';
import { boomPrint } from './clients/boomPrint.js';

export const start7BoomGame = (limit = 100, players) => {
  const numberGenerator = new NumberGenerator(limit);
  numberGenerator.on('boom', boomPrint);
  let value;
  const playersName = Object.keys(players);
  let counter = 0;
  const startCounting = setInterval(() => {
    value = numberGenerator.getGenerator().next().value;

    if (!value) {
      clearInterval(startCounting);
    } else {
      if (playersName.length === counter) {
        counter = 0;
      }
      if (find7Check(value) || multiple7Check(value)) {
        console.log(`${playersName[counter]}:`);
        numberGenerator.print();
        counter += 1;
      } else {
        console.log(`${playersName[counter]}:`);
        console.log(value);
        counter += 1;
      }
    }
  }, 1000);
};
