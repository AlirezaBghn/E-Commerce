import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Basket from "./Components/Basket";
import Login from "./Components/Login";
import SignUpPage from "./Components/SignUpPage";
import Checkout from "./Components/Checkout";
import { BasketProvider } from "./Context/BasketContext";

function App() {
  return (
    <BasketProvider>
      <div className="flex flex-col min-h-screen">
        <Router>
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="Basket" element={<Basket />} />
              <Route path="Login" element={<Login />} />
              <Route path="SignUpPage" element={<SignUpPage />} />
              <Route path="checkout" element={<Checkout />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </BasketProvider>
  );
}

export default App;
