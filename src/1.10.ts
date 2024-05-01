{
  //
  //   union  types
  //   type FrontEndDeveloper = "fakibajDeveloper" | "juniorDeveloper";
  //   const newDeveloper: FrontEndDeveloper = "fakibajDeveloper";

  type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "A+" | "A-" | "O+" | "O-";
  };

  const user1: User = {
    name: "Arafat Hosen",
    gender: "male",
    bloodGroup: "O+",
  };

  type FrontEndDeveloper = {
    skills: string[];
    designation1: "FrontEnd Developer";
  };
  type BackEndDeveloper = {
    skills: string[];
    designation1: "BackEnd Developer";
  };
  type FullStackDeveloper = FrontEndDeveloper & BackEndDeveloper;

  //   const fullstackDeveloper: FullStackDeveloper = {
  //     skills: ["React Native", "JS", "TS", "C#"],
  //     designation1: "FrontEnd Developer",
  //     designation2: "BackEnd Developer",
  //   };

  //
}
