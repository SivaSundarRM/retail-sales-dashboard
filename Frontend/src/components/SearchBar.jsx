import debounce from "../utils/debounce";

export default function SearchBar({ value, onChange }) {
  const handleChange = debounce((e) => onChange(e.target.value), 300);

  return (
    <input
      type="text"
      defaultValue={value}
      placeholder="Search by name or phone…"
      onChange={handleChange}
      className="search-input"
    />
  );
}
