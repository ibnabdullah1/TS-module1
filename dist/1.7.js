"use strict";
{
    // Spread Operator
    // rest operator
    // destructuring
    // Learn Spread Operator
    const bros1 = ["alia", "dalia", "malia", "khalia"];
    const bros2 = ["alia", "dalia", "malia", "khalia"];
    bros1.push(...bros2);
    const mentors1 = {
        typescript: "Mazba",
        redux: "Mir",
        DBMS: "Mizan",
    };
    const mentors2 = {
        prima: "Firoz",
        Next: "Tonmoy",
        Cloud: "Nahid",
    };
    const mentorList = Object.assign(Object.assign({}, mentors1), mentors2);
    //Learn Rest Operator
    //   const greetFriends = (friends1: string, friends2: string) => {
    const greetFriends = (...friends) => {
        friends.forEach((friend) => {
            console.log(`Hi ${friend}`);
        });
    };
    greetFriends("abul", "babul");
}
