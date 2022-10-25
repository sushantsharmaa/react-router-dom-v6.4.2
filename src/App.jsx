import React from "react";
import Home from "./components/Home/Home";
// import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import OrderSummary from "./components/OrderSummary/OrderSummary";
import Products from "./components/Products/Products";
import FeaturedProducts from "./components/Products/FeaturedProducts";
import NewProducts from "./components/Products/NewProducts";
import NoMatch from "./components/NoMatch/NoMatch";
import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";
import { Admin } from "./components/Admin/Admin";
const LazyAbout = React.lazy(() => import("./components/About/About"));

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback="Loading...">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="order-summary" element={<OrderSummary />}></Route>
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
