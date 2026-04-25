export type Gender = "female" | "male" | string;

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  age: number;
  gender: Gender;
};
