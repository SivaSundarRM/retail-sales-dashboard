export default function CategoryFilter({ filters, setFilters }) {
  const categories = ["Clothing", "Electronics", "Footwear", "Accessories"];

  const toggleCategory = (c) => {
    const selected = filters.category || [];
    const updated = selected.includes(c)
      ? selected.filter((v) => v !== c)
      : [...selected, c];

    setFilters({ ...filters, category: updated });
  };

  return (
    <select onChange={(e) => toggleCategory(e.target.value)}>
      <option value="">Product Category</option>
      {categories.map((c) => (
        <option key={c} value={c}>
          {c}
        </option>
      ))}
    </select>
  );
}
