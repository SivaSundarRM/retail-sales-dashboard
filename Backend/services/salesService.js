import Sales from "../models/Sales.js";

export const getSales = async ({ search, filters, sort, page }) => {
  const query = {};

  // ---------------- SEARCH ----------------
  if (search) {
    const regex = new RegExp(search, "i");
    query.$or = [
      { "Customer Name": regex },
      { "Phone Number": regex }
    ];
  }

  // ---------------- FILTERS ----------------
  if (filters.region?.length > 0) {
    query["Customer Region"] = { $in: filters.region };
  }

  if (filters.gender) {
    query["Gender"] = filters.gender;
  }

  if (filters.age) {
    query.Age = {
      $gte: filters.age.min || 0,
      $lte: filters.age.max || 120
    };
  }

  if (filters.category?.length > 0) {
    query["Product Category"] = { $in: filters.category };
  }

  if (filters.tags?.length > 0) {
    query.Tags = { $regex: filters.tags.join("|"), $options: "i" };
  }

  if (filters.paymentMethod) {
    query["Payment Method"] = filters.paymentMethod;
  }

  if (filters.date) {
    query.Date = {};
    if (filters.date.from) query.Date.$gte = new Date(filters.date.from);
    if (filters.date.to) query.Date.$lte = new Date(filters.date.to);
  }

  // ---------------- SORTING ----------------
  const sortOption = {};
  if (sort === "date_desc") sortOption.Date = -1;
  if (sort === "quantity") sortOption.Quantity = -1;
  if (sort === "name_asc") sortOption["Customer Name"] = 1;

  // ---------------- PAGINATION ----------------
  const pageSize = 10;
  const skip = (page - 1) * pageSize;

  const totalCount = await Sales.countDocuments(query);

  const data = await Sales.find(query)
    .sort(sortOption)
    .skip(skip)
    .limit(pageSize);

  // ---------------- METRICS ----------------
  const agg = await Sales.aggregate([
    { $match: query },
    {
      $group: {
        _id: null,
        totalQty: { $sum: "$Quantity" },
        totalAmount: { $sum: "$Final Amount" },
        totalDiscount: { $avg: "$Discount Percentage" }
      }
    }
  ]);

  const metrics = agg[0] || {
    totalQty: 0,
    totalAmount: 0,
    totalDiscount: 0
  };

  return {
    data,
    totalPages: Math.ceil(totalCount / pageSize),
    metrics
  };
};
