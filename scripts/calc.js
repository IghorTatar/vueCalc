const app = new Vue({
  el: '#app',
  data: {
    firstArgument: 0,
    secondArgument: null,
    operation: null,
  },
  computed: {
    display() {
      return String(this.firstArgument);
    },
    secondaryDisplay() {
      if (this.secondArgument === null) return ' ';
      return `${this.secondArgument} ${this.operation}`;
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
          this.firstArgument = this.firstArgument + this.secondArgument;
          break;
        case '-':
          /* TO BE DONE */
          break;
        case '*':
          /* TO BE DONE */
          break;
        case '/':
          /* TO BE DONE */
          break;
      }
      this.secondArgument = null;
      this.operation = null;
    }
  }
});