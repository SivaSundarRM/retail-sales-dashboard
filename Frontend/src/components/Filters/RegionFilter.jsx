export default function RegionFilter({ filters, setFilters }) {
  const regions = ["North", "South", "East", "West", "Central"];

  const toggleRegion = (region) => {
    const selected = filters.region || [];
    const updated = selected.includes(region)
      ? selected.filter((r) => r !== region)
      : [...selected, region];

    setFilters({ ...filters, region: updated });
  };

  return (
    <select onChange={(e) => toggleRegion(e.target.value)}>
      <option value="">Customer Region</option>
      {regions.map((r) => (
        <option value={r} key={r}>
          {r}
        </option>
      ))}
    </select>
  );
}
