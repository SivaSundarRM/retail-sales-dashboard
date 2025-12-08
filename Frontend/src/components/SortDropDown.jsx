export default function SortDropdown({ sort, setSort }) {
  return (
    <select value={sort} onChange={(e) => setSort(e.target.value)}>
      <option value="">Sort By</option>
      <option value="date_desc">Date (Newest First)</option>
      <option value="quantity">Quantity</option>
      <option value="name_asc">Customer Name (A–Z)</option>
    </select>
  );
}
