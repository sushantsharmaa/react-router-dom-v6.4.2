import React, { useState } from "react";
import { useAuth } from "../../utils/auth";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  const redirectPath = location.state?.path || "/";

  const handleLogin = () => {
    auth.login(userName);
    navigate(redirectPath, { replace: true });
  };

  return (
    <div>
      <label>
        Username:{" "}
        <input type="text" onChange={(e) => setUserName(e.target.value)} />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
