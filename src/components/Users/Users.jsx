import React from "react";
import { Outlet, Link } from "react-router-dom";

const Users = () => {
  return (
    <div>
      <Link to="1">
        <h2>User 1</h2>
      </Link>
      <Link to="2">
        <h2>User 2</h2>
      </Link>
      <Link to="3">
        <h2>User 3</h2>
      </Link>
      <Outlet />
    </div>
  );
};

export default Users;
