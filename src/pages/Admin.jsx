import { useState } from "react";
import usersData from "../data/users";
import UserTable from "../components/UserTable";
import Filters from "../components/Filters";
import EditUserModal from "../components/EditUserModal";

export default function Admin() {
  const [users, setUsers] = useState(usersData);
  const [selectedUser, setSelectedUser] = useState(null);
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("");

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) &&
      (role ? u.role === role : true)
  );

  const updateUser = (updatedUser) => {
    setUsers(users.map((u) => (u.id === updatedUser.id ? updatedUser : u)));
    setSelectedUser(null);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>

      <Filters onSearch={setSearch} onRoleChange={setRole} />

      <UserTable users={filteredUsers} onEdit={setSelectedUser} />

      {selectedUser && (
        <EditUserModal
          user={selectedUser}
          onSave={updateUser}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </div>
  );
}
