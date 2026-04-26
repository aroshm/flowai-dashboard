export type Gender = "female" | "male" | string;

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  age: number;
  gender: Gender;
  bank: { currency: string };
  currency: string;
  department: string;
  role: string;
  company: { department: string };
  bloodGroup: string;
  userAgent: string;
};
