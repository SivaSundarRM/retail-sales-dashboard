export default function AgeFilter({ filters, setFilters }) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFilters({
      ...filters,
      age: {
        ...filters.age,
        [name]: value,
      },
    });
  };

  return (
    <div className="age-range">
      <input
        type="number"
        name="min"
        placeholder="Age Min"
        value={filters.age?.min || ""}
        onChange={handleChange}
      />
      <input
        type="number"
        name="max"
        placeholder="Age Max"
        value={filters.age?.max || ""}
        onChange={handleChange}
      />
    </div>
  );
}
