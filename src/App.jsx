import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Basket from "./Components/Basket";
import Login from "./Components/Login";
import SignUpPage from "./Components/SignUpPage";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Basket" element={<Basket />} />
          <Route path="Login" element={<Login />} />
          <Route path="SignUpPage" element={<SignUpPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
