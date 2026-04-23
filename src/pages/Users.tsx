import { useEffect, useState } from "react";
import { getUsers } from "../api/users";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  age: number;
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  const filteredValue = users.filter((user) => {
    const searchText = search.toLocaleLowerCase();

    return (
      user.firstName.toLocaleLowerCase().includes(searchText) ||
      user.lastName.toLocaleLowerCase().includes(searchText)
    );
  });

  const itemsPerPage = 8;

  const paginatedUsers = filteredValue.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage,
  );

  return (
    <div className="space-y-6">
      <input
        type="text"
        placeholder="Search users..."
        className="border px-4 py-2 rounded-lg w-full max-w-sm"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-sm text-gray-600">
            <tr>
              <th className="p-4">User</th>
              <th>Email</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.map((user) => (
              <tr className="border-t" key={user.id}>
                <td className="p-4 flex items-center gap-3">
                  <img src={user.image} className="w-10 h-10 rounded-full" />
                  {user.firstName} {user.lastName}
                </td>
                <td>{user.email}</td>
                <td>{user.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex gap-2 mt-4">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          className="px-3 py-1 border rounded"
        >
          Prev
        </button>

        <button
          onClick={() => setPage((p) => p + 1)}
          className="px-3 py-1 border rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Users;
