{
  //  Destructuring

  const user = {
    id: 123,
    name: {
      firstName: "arafat",
      lastName: "Hosen",
    },
    contactNo: "01872384654",
    address: "Dhaka",
  };

  const {
    contactNo,
    name: { lastName: lastN },
  } = user;

  const myFriends = ["chandler", "joey", "ross", "rachel"];

  const [, , bestFriend] = myFriends;
}
