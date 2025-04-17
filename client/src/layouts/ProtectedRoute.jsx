import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//import { getLoggedUser } from "../apiCalls/user";
import {toast} from "react-toastify";
import axiosInstance from "../utils/axiosInstance";
//import { setUserData } from "../store/userSlice";
const ProtectedRoute = ({ children }) => {
  //const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getLoggedInUser = async () => {
    try {
      const response = await axiosInstance('/api/auth/logged-user')
      console.log("getLoggedUser Response:", response);
      if (response) {  
        console.log("User data set in Redux:", response.data);
      } else {
        throw new Error(response?.message || "Session expired.");
      }
    } catch (error) {
      console.error("Error in getLoggedInUser:", error);
      toast.error(error.message);
      localStorage.removeItem("token");  // ✅ Only remove token if invalid
      navigate("/");
    } finally {
      setLoading(false);  // ✅ Move this here to ensure it runs after the API call
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      getLoggedInUser();
    } else {
      console.log("No token found, redirecting to login");
      navigate("/");
    }
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center h-screen text-xl">Loading...</div>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;