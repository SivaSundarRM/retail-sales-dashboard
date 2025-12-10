import "../styles/table.css";

export default function TransactionTable({ data }) {
  if (!data || data.length === 0) {
    return <p>No results available</p>;
  }

  const columns = Object.keys(data[0]).filter(col => col !== "_id");

  return (
    <div className="table-wrapper">
      <table className="sales-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {columns.map((col) => (
                <td key={col}>
                  {/* Format currency fields */}
                  {["Final Amount", "Total Amount", "Price per Unit"].includes(col)
                    ? `₹${row[col]}`
                    : String(row[col])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
