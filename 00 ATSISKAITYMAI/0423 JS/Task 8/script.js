/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }
  sum() {
    console.log(
      `Sum of numbers that you provided equals to ${this.num1 + this.num2}`
    );
  }
  subtraction() {
    console.log(
      `Subtraction of numbers that you provided equals to ${
        this.num1 - this.num2
      }`
    );
  }
  multiplication() {
    console.log(
      `Multiplication of numbers that you provided equals to ${
        this.num1 * this.num2
      }`
    );
  }
  division() {
    console.log(
      `Division of numbers that you provided equals to ${this.num1 / this.num2}`
    );
  }
}

const nums = new Calculator(10, 10);
nums.sum();
nums.subtraction();
nums.multiplication();
nums.division();
