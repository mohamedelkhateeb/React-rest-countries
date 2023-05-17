// Routing
import { Routes, Route } from "react-router-dom";
// Pages
import AllCountries from "./components/AllCountries/AllCountries";

// Function Componenet
function App() {
  return (
    <header>
      <div className="bg-secondary px-5  d-flex align-items-center justify-content-between text-white px-2 py-2">
        <h1>Rest Countries</h1>
        Which country do you want ?
      </div>
      <div className="px-5">
        <Routes>
          <Route path="/" element={<AllCountries />} />
          <Route path="/country/:countryName" element={<AllCountries />} />
        </Routes>
      </div>
    </header>
  );
}

export default App;
