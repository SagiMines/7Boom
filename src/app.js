import NumberGenerator from './publishers/numberGenerator';
import { find7Check } from './clients/find7';
import { multiple7Check } from './clients/multiple7';

export const start7BoomGame = (limit = 100, players) => {
  const numberGenerator = new NumberGenerator(limit);
  numberGenerator.on('boom', printBoom);
  numberGenerator.on('multiple7', multiple7Answer);
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
      numberGenerator.printNumber(value);
    } else {
      console.log(`${playersName[counter]}:`);
      console.log(value);
    }
  }, 1000);
};
