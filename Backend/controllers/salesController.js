import { getSales } from "../services/salesService.js";

export const fetchSales = async (req, res) => {
  try {
    const { search, sort, page } = req.query;
    const filters = req.query.filters ? JSON.parse(req.query.filters) : {};

    const result = await getSales({
      search: search || "",
      sort: sort || "",
      page: parseInt(page) || 1,
      filters,
    });

    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server Error" });
  }
};
