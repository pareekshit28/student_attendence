import CheckInPage from "./pages/CheckInPage";
import CheckOutPage from "./pages/CheckOutPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkin" element={<CheckInPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
