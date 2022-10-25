import React from "react";
import Home from "./components/Home/Home";
import Users from "./components/Users/Users";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { Admin } from "./components/Admin/Admin";
import NoMatch from "./components/NoMatch/NoMatch";
import Profile from "./components/Profile/Profile";
import Products from "./components/Products/Products";
import NewProducts from "./components/Products/NewProducts";
import UserDetails from "./components/UserDetails/UserDetails";
import OrderSummary from "./components/OrderSummary/OrderSummary";
import FeaturedProducts from "./components/Products/FeaturedProducts";
import { AuthProvider } from "./utils/auth";
import Login from "./components/Login/Login";
import RequireAuth from "./utils/RequireAuth";
const LazyAbout = React.lazy(() => import("./components/About/About"));

function App() {
  return (
    <AuthProvider>
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
        <Route
          path="profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
