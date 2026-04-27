import type { User } from "../types/user";

type UsersResponse = {
  users: User[];
};

export const getUsers = async (): Promise<User[]> => {
  const response = await fetch("https://dummyjson.com/users");
  if (!response.ok) throw new Error("Failed to fetch users");

  const data = (await response.json()) as UsersResponse;

  return data.users;
};
