// pages/AuthSuccess.jsx
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
const AuthSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");
    if (token) {
      localStorage.setItem("token", token); 
      navigate("/"); // or any protected page
    } else {
      navigate("/login");
    }
  }, []);
  return <div>Authenticating...</div>;
};

export default AuthSuccess;
