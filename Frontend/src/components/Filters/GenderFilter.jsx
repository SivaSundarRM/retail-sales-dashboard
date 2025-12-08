export default function GenderFilter({ filters, setFilters }) {
  const genders = ["Male", "Female", "Other"];

  const handleChange = (e) => {
    setFilters({ ...filters, gender: e.target.value });
  };

  return (
    <select value={filters.gender || ""} onChange={handleChange}>
      <option value="">Gender</option>
      {genders.map((g) => (
        <option key={g} value={g}>
          {g}
        </option>
      ))}
    </select>
  );
}
