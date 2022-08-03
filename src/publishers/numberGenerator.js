import EventEmitter from 'events';

class NumberGenerator extends EventEmitter {
  constructor(limit) {
    super();
    this.generator = this.numberGenerator(limit);
  }

  numberGenerator = function* (limit) {
    for (let i = 1; i <= limit; i++) {
      yield i;
    }
  };

  getGenerator() {
    return this.generator;
  }
}

export default NumberGenerator;
