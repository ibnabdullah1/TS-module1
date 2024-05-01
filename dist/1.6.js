"use strict";
{
    // Learning Function
    // Normal Function
    //  Arrow Function
    function add(num1, num2) {
        return num1 + num2;
    }
    add(22, 33);
    const addArrow = (num1, num2) => num1 + num2;
    // Object --> function --> method
    const poorUser = {
        name: "Mezba",
        balance: 0,
        addBalance(balance) {
            return `My new balance is: ${this.balance + balance}`;
        },
    };
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const newArray = arr.map((elem) => elem * elem);
}
