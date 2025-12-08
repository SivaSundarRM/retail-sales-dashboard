import SearchBar from "../components/SearchBar";
import SortDropdown from "../components/SortDropdown";
import Pagination from "../components/Pagination";
import TransactionTable from "../components/TransactionTable";
import NoResults from "../components/NoResults";

import {
  RegionFilter,
  GenderFilter,
  AgeFilter,
  CategoryFilter,
  TagFilter,
  PaymentFilter,
  DateRangeFilter,
} from "../components/Filters";

import useSalesData from "../hooks/useSalesData";
import "../styles/dashboard.css";

export default function SalesPage() {
  const {
    loading,
    data,
    totalPages,
    metrics,
    search,
    setSearch,
    filters,
    setFilters,
    sort,
    setSort,
    page,
    setPage,
  } = useSalesData();

  return (
    <div className="page-wrapper">

      {/* HEADER */}
      <div className="header">
        <h2>Retail Sales Management</h2>

        {/* SEARCH BAR */}
        <SearchBar value={search} onChange={setSearch} />

        <div className="filters-container">

          <div className="filters-row">
            <RegionFilter filters={filters} setFilters={setFilters} />
            <GenderFilter filters={filters} setFilters={setFilters} />
            <AgeFilter filters={filters} setFilters={setFilters} />
            <CategoryFilter filters={filters} setFilters={setFilters} />
            <TagFilter filters={filters} setFilters={setFilters} />
          </div>

          <div className="filters-row">
            <PaymentFilter filters={filters} setFilters={setFilters} />
            <DateRangeFilter filters={filters} setFilters={setFilters} />
            <SortDropdown sort={sort} setSort={setSort} />

            <div className="empty-filter"></div>
            <div className="empty-filter"></div>
          </div>

        </div>
      </div>

      {/* METRICS */}
      <div className="metrics-row">
        <div className="metric-card">
          <div className="metric-title">Total Units Sold</div>
          <div className="metric-value">{metrics.totalQty}</div>
        </div>

        <div className="metric-card">
          <div className="metric-title">Total Revenue</div>
          <div className="metric-value">₹{metrics.totalAmount}</div>
        </div>

        <div className="metric-card">
          <div className="metric-title">Total Discount %</div>
          <div className="metric-value">{metrics.totalDiscount}%</div>
        </div>
      </div>

      {/* TABLE */}
      {loading ? (
        <p className="loading">Loading...</p>
      ) : data.length === 0 ? (
        <NoResults />
      ) : (
        <TransactionTable data={data} />
      )}

      {/* PAGINATION */}
      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </div>
  );
}
