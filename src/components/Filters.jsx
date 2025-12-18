export default function Filters({ onSearch, onRoleChange }) {
  return (
    <div className="flex gap-4">
      <input
        className="border p-2"
        placeholder="Search by name"
        onChange={(e) => onSearch(e.target.value)}
      />
      <select
        className="border p-2"
        onChange={(e) => onRoleChange(e.target.value)}
      >
        <option value="">All Roles</option>
        <option value="Admin">Admin</option>
        <option value="User">User</option>
        <option value="Manager">Manager</option>
      </select>
    </div>
  );
}
