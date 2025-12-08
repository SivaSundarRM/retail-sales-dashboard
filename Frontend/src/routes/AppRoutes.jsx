import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SalesPage from "../pages/SalesPage";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SalesPage />} />
      </Routes>
    </Router>
  );
}
