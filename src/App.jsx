import Home from "./components/Home/Home";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import OrderSummary from "./components/OrderSummary/OrderSummary";
import Products from "./components/Products/Products";
import FeaturedProducts from "./components/Products/FeaturedProducts";
import NewProducts from "./components/Products/NewProducts";
import NoMatch from "./components/NoMatch/NoMatch";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order-summary" element={<OrderSummary />}></Route>
        <Route path="products" element={<Products />}>
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
