import mongoose from "mongoose";

const SalesSchema = new mongoose.Schema(
  {
    "Customer ID": String,
    "Customer Name": String,
    "Phone Number": String,
    Gender: String,
    Age: Number,
    "Customer Region": String,
    "Customer Type": String,

    "Product ID": String,
    "Product Name": String,
    Brand: String,
    "Product Category": String,
    Tags: String,

    Quantity: Number,
    "Price per Unit": Number,
    "Discount Percentage": Number,
    "Total Amount": Number,
    "Final Amount": Number,

    Date: Date,
    "Payment Method": String,
    "Order Status": String,
    "Delivery Type": String,
    "Store ID": String,
    "Store Location": String,
    "Salesperson ID": String,
    "Employee Name": String
  },
  { collection: "Sales" } 
);

export default mongoose.model("Sales", SalesSchema);
