
# Retail Sales Management Dashboard

## 1. Overview 
This project is a full-stack Retail Sales Management Dashboard that allows users to explore, filter, sort, and analyze large sales datasets efficiently.  
It includes real-time search, dynamic filtering, sortable tables, metrics calculation, and paginated data loading.  
The UI is built with a modern responsive layout, and the backend provides fast API endpoints connected to MongoDB.  
The goal is to offer a smooth and intuitive analytical experience for retail sales insights.



## 2. Tech Stack
**Frontend:** React (Vite), Custom CSS, Axios  
**Backend:** Node.js, Express.js  
**Database:** MongoDB (Atlas Cluster)  
**Build Tools:** Vite  
**State Management:** React Hooks + custom filtering logic  


## 3. Search Implementation Summary
- Implemented a real-time search bar that filters data based on **customer name** or **phone number**.  
- Search value is stored in React state and passed to the backend API as a query parameter.  
- The backend filters using case-insensitive regex for accurate match results.  
- Search operates alongside filters, pagination, and sorting without breaking the dataset.



## 4. Filter Implementation Summary
- Filters implemented:  
  **Region, Gender, Age Range, Product Category, Tags, Payment Method, Date Range**  
- Each filter updates global `filters` state and triggers a fresh API call.  
- Backend dynamically builds a MongoDB query object using provided filters.  
- Filters work together (multi-filter querying) and respond instantly.  
- UI contains **two structured rows with 5 filters each** for clean layout.

---

## 5. Sorting Implementation Summary
- Sorting is applied through a dropdown allowing user to sort by fields such as  
  **Date, Total Amount, Final Amount, Age, Quantity**, etc.  
- Selected sort preference updates `sort` state in React.  
- Backend receives `sortBy` and applies MongoDB `.sort()` before returning paginated results.  
- Sorting works seamlessly with search, filters, and pagination.



## 6. Pagination Implementation Summary
- Implemented **server-side pagination** to handle large datasets efficiently.  
- Pagination is controlled using `page` and `limit` query parameters.  
- Backend returns current page, total pages, and sliced results.  
- Frontend displays `Prev` / `Next` buttons and shows the current page index.  
- Table scrolls horizontally inside its wrapper without moving the whole page.

---

## 7. Setup Instructions
### Backend Setup
1. Navigate to the backend folder:  
   ```bash
   cd Backend
````

2. Install dependencies:

   ```bash
   npm install
   ```
3. Create `.env` file:

   ```env
   MONGO_URI="your-mongodb-connection-string"
   PORT=5000
   ```
4. Start backend:

   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to frontend folder:

   ```bash
   cd Frontend
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the frontend:

   ```bash
   npm run dev
   ```
Example:
Frontend(React+vite) run in the port number 5173 and backend(express+node) run in the port number 5000
The app will run at `http://localhost:5173` and communicate with backend API at `http://localhost:5000/api/sales`.

```

