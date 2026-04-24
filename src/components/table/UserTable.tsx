import { useEffect, useState } from "react";
import { getUsers } from "../../api/users";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  age: number;
}

interface UserTableProps {
  itemsPerPage: number;
  showPaginations: boolean;
}

const UserTable = ({ itemsPerPage, showPaginations }: UserTableProps) => {
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

  const paginatedValues = filteredValue.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage,
  );

  const displayUsers = showPaginations ? paginatedValues : filteredValue;
  const totalPages = Math.ceil(filteredValue.length / itemsPerPage);

  const getStatus = (id: number) => {
    return id % 2 === 0 ? "Active" : "Inactive";
  };

  return (
    <div className="space-y-6">
      <input
        type="text"
        placeholder="Search users..."
        className="border px-4 py-2 rounded-lg w-full max-w-sm dark:border-gray-500 dark:text-gray-100"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-left dark:border dark:border-gray-500">
          <thead className="bg-gray-100 text-sm text-gray-600 dark:bg-slate-900 dark:text-gray-400">
            <tr>
              <th className="p-4">User</th>
              <th>Email</th>
              <th>Age</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr className="dark:bg-slate-800">
                <td className="p-6 ">Loading users...</td>
              </tr>
            ) : (
              displayUsers.map((user) => (
                <tr
                  className="border-t hover:bg-gray-50 transition dark:border-t-gray-500 dark:bg-slate-800 dark:hover:bg-slate-700"
                  key={user.id}
                >
                  <td className="p-4 flex items-center gap-3 font-medium dark:text-gray-300">
                    <img src={user.image} className="w-10 h-10 rounded-full" />
                    {user.firstName} {user.lastName}
                  </td>
                  <td className="text-gray-600 dark:text-gray-400">
                    {user.email}
                  </td>
                  <td className="text-gray-500 dark:text-gray-400">
                    {user.age}
                  </td>
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

      {showPaginations && (
        <div className="flex gap-2 mt-4">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            className="px-3 py-1 border rounded dark:border-gray-500 dark:text-gray-100 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={page === 1}
          >
            Prev
          </button>

          <button
            onClick={() => setPage((p) => p + 1)}
            className="px-3 py-1 border rounded dark:border-gray-500 dark:text-gray-100 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default UserTable;
