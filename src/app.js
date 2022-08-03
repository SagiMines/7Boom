import NumberGenerator from './publishers/numberGenerator';
import { find7Check } from './clients/find7';
import { multiple7Check } from './clients/multiple7';
import { boomPrint } from './clients/boomPrint';

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
    }
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
  }, 1000);
};
