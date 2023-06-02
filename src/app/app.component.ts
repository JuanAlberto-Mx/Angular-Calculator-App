import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-calculator-app';

  // Variable to set the operations result.
  result: number = 0;

  // Variable to set the selected operation name.
  functionT: any = 'NoFunction';

  // Variable to set the digit clicked by the user.
  digit: string = 'NoValue';

  // Variable to set the first number in an operation.
  firstNumber: number = 0;

  // Variable to set the second number in an operation.
  secondNumber: number = 0;

  // Variable to set the total amount
  total: number = 0;

  /**
   * Determines the key pressed by the user and its type in order to perform a specific task.
   * @param keyPressed the calculator key pressed by the user.
   * @param keyType the type of the calculator's key.
   */
  onClickValue(keyPressed: string, keyType: any) {
    if(keyType == 'number') {
      this.onClickNumber(keyPressed);
    }
    else if(keyType == 'function') {
      this.onClickFunction(keyPressed);
    }
  }

  /**
   * Concatenates the values of each key pressed by the user.
   * @param keyPressed the key pressed by the user.
   */
  onClickNumber(keyPressed: string) {
    if(this.digit != 'NoValue') {
      this.digit = this.digit + keyPressed;
    }
    else {
      this.digit = keyPressed;
    }

    this.result = parseFloat(this.digit);
  }

  /**
   * Determines the kind of function to do according to the key pressed by the user.
   * @param keyPressed the key pressed by the user.
   */
  onClickFunction(keyPressed: string) {
    if(keyPressed == 'C') {
      this.clearAll();
    }
    else if(this.functionT == 'NoFunction') {
      this.firstNumber = this.result;
      this.result = 0;
      this.digit = 'NoValue';
      this.functionT = keyPressed;
    }
    else if(this.functionT != 'NoFunction') {
      this.secondNumber = this.result;

      this.calculateValue(keyPressed);
    }
  }

  /**
   * Performs the math operations according to the digits entered and the function selected by the user.
   * @param keyPressed the key pressed by the user.
   */
  calculateValue(keyPressed: string) {
    if(this.functionT == '+') {
      this.total = this.firstNumber + this.secondNumber;
    }
    else if(this.functionT == '-') {
      this.total = this.firstNumber - this.secondNumber;
    }
    else if(this.functionT == '*') {
      this.total = this.firstNumber * this.secondNumber;
    }
    else if(this.functionT == '/') {
      this.total = this.firstNumber / this.secondNumber;
    }
    else if(this.functionT == '%') {
      this.total = this.firstNumber % this.secondNumber;
    }

    this.displayTotalValues(keyPressed);

    if(keyPressed == '='){
      this.onEqualsPressed()
    }
  }

  /**
   * Displays the total amounts according to the math operations performed by the user.
   * @param keyPressed the key pressed by the user.
   */
  displayTotalValues(keyPressed: string) {
    this.result = this.total;
    this.firstNumber = this.total;
    this.secondNumber = 0;
    this.digit = 'NoValue';
    this.functionT = keyPressed;
  }

  /**
   * Resets the values of the calculator after the equals button is pressed.
   */
  onEqualsPressed() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.functionT = 'NoFunction';
    this.digit = 'NoValue';
  }

  /**
   * Resets all to predefined values.
   */
  clearAll() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.result = 0;
    this.functionT = 'NoFunction';
    this.digit = 'NoValue';
  }
}
