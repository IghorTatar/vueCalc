const app = new Vue({
  el: '#app',
  data: {
    firstArgument: 0,
    secondArgument: null,
    operation: null,
  },
  computed: {
    display() {
      //return String(this.firstArgument);
      return;
    },
    secondaryDisplay() {
      if (this.secondArgument === null) {
        if (this.operation === null) return this.firstArgument;
      return `${this.firstArgument} ${this.operation}`;
      }
      return `${this.secondArgument} ${this.operation} ${this.firstArgument}`;
    }
  },
  methods: {
    clearDisplay() {
      this.firstArgument = 0;
    },
    onPressedDigit(digit) {
      if (this.firstArgument === null) {
        this.firstArgument = digit;
        return;
      }
      this.firstArgument = this.firstArgument * 10 + digit;
    },
    onPressedOperation(operation) {
      this.secondArgument = this.firstArgument;
      this.operation = operation;
      this.clearDisplay();
    },
    calculate() {
      if (this.operation === null) return;
      if (this.secondArgument === null) return;
      switch(this.operation) {
        case '+':
          this.firstArgument += this.secondArgument;
          break;
        case '-':
          this.firstArgument = this.secondArgument - this.firstArgument;
          break;
        case '*':
          this.firstArgument *= this.secondArgument;
          break;
        case '/':
          this.firstArgument = this.secondArgument / this.firstArgument;
          break;
        case '+/-':
          this.firstArgument = this.secondArgument;
          this.firstArgument *= -1;
          break;
        case '.':
          this.firstArgument = this.secondArgument;
          this.firstArgument /= 10;
          break;
      }
      this.secondArgument = null;
      this.operation = null;
    }
  }
});
