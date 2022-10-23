import Home from "./components/Home/Home";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import OrderSummary from "./components/OrderSummary/OrderSummary";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order-summary" element={<OrderSummary />}></Route>
      </Routes>
    </>
  );
}

export default App;
