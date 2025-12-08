export default function DateRangeFilter({ filters, setFilters }) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFilters({
      ...filters,
      date: {
        ...filters.date,
        [name]: value,
      },
    });
  };

  return (
    <div className="date-range">
      <input
        type="date"
        name="from"
        value={filters.date?.from || ""}
        onChange={handleChange}
      />
      <input
        type="date"
        name="to"
        value={filters.date?.to || ""}
        onChange={handleChange}
      />
    </div>
  );
}
