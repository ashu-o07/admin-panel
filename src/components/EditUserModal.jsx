import { useState } from "react";

export default function EditUserModal({ user, onSave, onClose }) {
  const [name, setName] = useState(user.name);
  const [role, setRole] = useState(user.role);

  const submit = () => {
    onSave({ ...user, name, role });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-6 rounded w-80">
        <h2 className="text-lg font-semibold mb-4">Edit User</h2>

        <input
          className="border p-2 w-full mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select
          className="border p-2 w-full mb-4"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option>Admin</option>
          <option>User</option>
          <option>Manager</option>
        </select>

        <div className="flex justify-end gap-2">
          <button onClick={onClose}>Cancel</button>
          <button className="bg-black text-white px-3" onClick={submit}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
