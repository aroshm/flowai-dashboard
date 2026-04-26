import { useMemo, useState } from "react";
import useUsers from "../../hooks/useUsers";

interface UserTableProps {
  itemsPerPage: number;
  showPaginations: boolean;
}

const UserTable = ({ itemsPerPage, showPaginations }: UserTableProps) => {
  const { users, loading, error } = useUsers();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filteredUsers = useMemo(
    () =>
      users.filter((user) => {
        const searchText = search.toLocaleLowerCase();

        return (
          user.firstName.toLocaleLowerCase().includes(searchText) ||
          user.lastName.toLocaleLowerCase().includes(searchText)
        );
      }),
    [search, users],
  );

  const paginatedUsers = filteredUsers.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage,
  );

  const displayUsers = showPaginations ? paginatedUsers : filteredUsers;
  const totalPages = Math.max(
    1,
    Math.ceil(filteredUsers.length / itemsPerPage),
  );

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
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr className="dark:bg-slate-800">
                <td className="p-6" colSpan={4}>
                  Loading users...
                </td>
              </tr>
            ) : error ? (
              <tr className="dark:bg-slate-800">
                <td className="p-6 text-red-500" colSpan={4}>
                  {error}
                </td>
              </tr>
            ) : displayUsers.length === 0 ? (
              <tr className="dark:bg-slate-800">
                <td className="p-6 dark:text-gray-300" colSpan={4}>
                  No users found.
                </td>
              </tr>
            ) : (
              displayUsers.map((user) => (
                <tr
                  className="border-t hover:bg-gray-50 transition dark:border-t-gray-500 dark:bg-slate-800 dark:hover:bg-slate-700"
                  key={user.id}
                >
                  <td className="p-4 flex items-center gap-3 font-medium dark:text-gray-300">
                    <img
                      src={user.image}
                      alt={`${user.firstName} ${user.lastName}`}
                      className="w-10 h-10 rounded-full"
                    />
                    {user.firstName} {user.lastName}
                  </td>
                  <td className="text-gray-600 dark:text-gray-400">
                    {user.email}
                  </td>
                  <td className="text-gray-500 dark:text-gray-400">
                    {user.age}
                  </td>
                  <td className="text-gray-500 dark:text-gray-400">
                    {user.role}
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
