import { useEffect, useState } from "react";
import api from "../services/api";

export default function useSalesData() {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);

  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [metrics, setMetrics] = useState({ totalQty: 0, totalAmount: 0, totalDiscount: 0 });
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);

    const response = await api.getSales({
      search,
      filters: JSON.stringify(filters),
      sort,
      page
    });

    setData(response.data);
    setTotalPages(response.totalPages);
    setMetrics(response.metrics);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [search, filters, sort, page]);

  return {
    search, setSearch,
    filters, setFilters,
    sort, setSort,
    page, setPage,
    data, totalPages, loading, metrics
  };
}
