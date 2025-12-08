export default function PaymentFilter({ filters, setFilters }) {
  const methods = ["Cash", "Card", "UPI", "Wallet"];

  return (
    <select
      value={filters.paymentMethod || ""}
      onChange={(e) =>
        setFilters({ ...filters, paymentMethod: e.target.value })
      }
    >
      <option value="">Payment Method</option>
      {methods.map((m) => (
        <option key={m} value={m}>
          {m}
        </option>
      ))}
    </select>
  );
}
