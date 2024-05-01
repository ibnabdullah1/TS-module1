{
  // Type Alias
  type Student = {
    name: string;
    age: number;
    contactNo?: string;
    gender: string;
    address: string;
  };

  const student1: Student = {
    name: "Mezba",
    age: 22,
    gender: "male",
    contactNo: "89734150569",
    address: "ctg",
  };
  const student2: Student = {
    name: "Mir",
    age: 20,
    gender: "male",
    address: "ctg",
  };
  const student3: Student = {
    name: "Mir",
    age: 20,
    gender: "male",
    address: "ctg",
  };
  type UserName = string;
  const userName: UserName = "11";
  type add = (user1: number, user2: number) => number;
  const add: add = (num1, num2) => num1 + num2;
  //
}
