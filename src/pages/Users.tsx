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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers()
      .then(setUsers)
      .finally(() => setLoading(false));
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

  const getStatus = (id: number) => {
    return id % 2 === 0 ? "Active" : "Inactive";
  };

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
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td className="p-6">Loading users...</td>
              </tr>
            ) : (
              paginatedUsers.map((user) => (
                <tr
                  className="border-t hover:bg-gray-50 transition"
                  key={user.id}
                >
                  <td className="p-4 flex items-center gap-3 font-medium">
                    <img src={user.image} className="w-10 h-10 rounded-full" />
                    {user.firstName} {user.lastName}
                  </td>
                  <td className="text-gray-600">{user.email}</td>
                  <td className="text-gray-500">{user.age}</td>
                  <td>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        getStatus(user.id) === "Active"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {getStatus(user.id)}
                    </span>
                  </td>
                </tr>
              ))
            )}
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
