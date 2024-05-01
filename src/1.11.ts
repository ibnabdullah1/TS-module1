{
  //
  // Ternary operator || optional operator|| nullish operator
  const age: number = 18;
  //   if (age >= 19) {
  //     console.log("This person is already Adult");
  //   } else {
  //     console.log("This person is not adult");
  //   }

  //   Ternary operator
  const isAdult = age >= 18 ? "Adult" : "Not Adult";
  //   console.log({ isAdult });

  //   nullish operator
  const isAuthenticated = null;
  //   const result = isAuthenticated ?? "Guest";
  //   console.log({ result });

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "John",
    address: {
      city: "CTG",
      road: "Mountain",
      presentAddress: "Halishoror",
    },
  };
  const permanentAddress =
    user?.address?.permanentAddress ?? "No Permanent address available";
  console.log(permanentAddress);
  //
}
