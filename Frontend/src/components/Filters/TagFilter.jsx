export default function TagFilter({ filters, setFilters }) {
  const tags = ["Sale", "New", "Trending", "Limited", "Clearance"];

  const toggleTag = (t) => {
    const selected = filters.tags || [];
    const updated = selected.includes(t)
      ? selected.filter((x) => x !== t)
      : [...selected, t];

    setFilters({ ...filters, tags: updated });
  };

  return (
    <select onChange={(e) => toggleTag(e.target.value)}>
      <option value="">Tags</option>
      {tags.map((t) => (
        <option key={t} value={t}>
          {t}
        </option>
      ))}
    </select>
  );
}
