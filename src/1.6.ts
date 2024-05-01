{
  // Learning Function
  // Normal Function
  //  Arrow Function

  function add(num1: number, num2: number): number {
    return num1 + num2;
  }
  add(22, 33);

  const addArrow = (num1: number, num2: number): number => num1 + num2;

  // Object --> function --> method

  const poorUser = {
    name: "Mezba",
    balance: 0,
    addBalance(balance: number) {
      return `My new balance is: ${this.balance + balance}`;
    },
  };

  const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const newArray: number[] = arr.map((elem: number): number => elem * elem);
}
