import { useEffect, useState } from "react";
import { getUsers } from "../api/users";
import type { User } from "../types/user";

type UseUsersResult = {
  users: User[];
  loading: boolean;
  error: string | null;
};

const useUsers = (): UseUsersResult => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    getUsers()
      .then((users) => {
        if (!isMounted) return;
        setUsers(users);
        setError(null);
      })
      .catch((error: unknown) => {
        if (!isMounted) return;
        setError(error instanceof Error ? error.message : "Failed to fetch users");
      })
      .finally(() => {
        if (!isMounted) return;
        setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { users, loading, error };
};

export default useUsers;
