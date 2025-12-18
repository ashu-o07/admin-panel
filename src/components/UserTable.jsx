export default function UserTable({ users, onEdit }) {
  return (
    <table className="w-full border mt-4">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-2">Name</th>
          <th className="border p-2">Email</th>
          <th className="border p-2">Role</th>
          <th className="border p-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u) => (
          <tr key={u.id}>
            <td className="border p-2">{u.name}</td>
            <td className="border p-2">{u.email}</td>
            <td className="border p-2">{u.role}</td>
            <td className="border p-2">
              <button
                className="text-blue-600"
                onClick={() => onEdit(u)}
              >
                Edit
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
