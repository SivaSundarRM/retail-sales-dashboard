1. Frontend Architecture

The frontend follows a component-driven architecture built using React + Vite with emphasis on reusability, modularity, and data-driven UI.

🔷 Key Architectural Layers
a. Page Layer

    Contains the main application screens.

    SalesPage.jsx serves as the central container.

    Coordinates search, filters, metrics, table rendering, and pagination.

b. Component Layer

    Reusable UI components split by responsibility:

    UI Components

SearchBar.jsx

SortDropdown.jsx

Pagination.jsx

TransactionTable.jsx

NoResults.jsx

Filter Components (Modular filters)

RegionFilter.jsx

GenderFilter.jsx

AgeFilter.jsx

CategoryFilter.jsx

TagFilter.jsx

PaymentFilter.jsx

DateRangeFilter.jsx

c. Hooks Layer

    useSalesData.jsx
A custom hook that manages:

    Fetch requests

    Search state

    Filter state

    Sort state
    Pagination state

Returned table data + metrics

This hook centralizes all logical operations.

d. Styling Layer

    dashboard.css → Layout, header, filters, metrics

    table.css → Responsive table design

The frontend structure keeps UI, logic, and styles completely separated.

⭐ 2. Backend Architecture

The backend is built using Node.js + Express with a clear layered architecture that separates routing, business logic, and database operations.

🔷 Key Backend Layers
a. Route Layer

    salesRoutes.js

    Handles all requests to /api/sales

    Passes work to controller

b. Controller Layer

    salesController.js
    Responsible for:

    Extracting search, filters, sort, pagination from query params

    Validating inputs

    Calling service layer

    Returning uniform JSON response

c. Service Layer

    salesService.js
    Handles business logic:

    Dynamic Mongo query construction

        Formatting Date Range queries

    Sorting logic

    Pagination logic

    Metrics calculation (Total Amount, Total Qty, Discount %)

d. Database Layer

    Sales.js (Mongoose schema)

    MongoDB Atlas connection via db.js

e. Server Layer

    index.js

Creates Express server

Registers middleware

Loads routes

This architecture supports scalability and clear separation of concerns.

⭐ 3. Data Flow (End-to-End)

Below is the complete flow of data from user interaction → database → UI:

(1) User Interaction
    Search / Filters / Sort / Pagination

           ↓

(2) Frontend State (useSalesData Hook)
    Builds query parameters

           ↓

(3) API Request to Backend
    GET /api/sales?search=...&region=...&sort=...

           ↓

(4) Controller (salesController)
    Validates & forwards to service

           ↓

(5) Service Layer (salesService)
    Builds dynamic MongoDB query:
    • Search (regex)
    • Filters (region, gender, dates, etc.)
    • Sort (asc/desc)
    • Pagination (skip, limit)

           ↓

(6) MongoDB (Sales Collection)
    Returns matching + sorted + paginated results

           ↓

(7) Backend Response
    {
      data: [...],
      totalPages: X,
      metrics: {...}
    }

           ↓

(8) React Hook Updates State
    setData(), setMetrics(), setPage()

           ↓

(9) UI Renders Updated Table, Filters, Metrics


This flow ensures that the server does all heavy operations, and the frontend remains lightweight and fast.

⭐ 4. Module Responsibilities


🔷 Frontend Module Responsibilities

Module	Responsibility

SalesPage.jsx	        -->          Main dashboard; coordinates search, filters, sorting, pagination, table, metrics

SearchBar.jsx	        -->          Handles real-time search input

Filters/	            -->          Each filter updates the global filters state

SortDropdown.jsx        -->	         Sorts table based on selected field

Pagination.jsx	        -->          Moves between pages and triggers data fetch

TransactionTable.jsx	-->          Renders dynamic columns and rows

useSalesData.jsx	    -->          Central logic: API calls, state management, merging search+filters+sort+pagination

NoResults.jsx	        -->          Shown when no data matches the query

dashboard.css	        -->          Layout, filters, header, metrics styling

table.css	            -->          Horizontal scroll, table styling

🔷 Backend Module Responsibilities

Module	Responsibility

salesRoutes.js	               -->         Defines /api/sales routes

salesController.js	           -->         Handles incoming API requests; extracts parameters; returns response

salesService.js                -->         search, filter, sort, pagination, metrics	
Business logic      
Sales.js (Mongoose Model)	   -->         Schema for storing sales data

db.js	                       -->         MongoDB Atlas connection

index.js	                   -->         Initializes Express server and middleware
