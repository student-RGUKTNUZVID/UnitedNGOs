// Import the axios library to make HTTP requests
import axios from "axios";
// Import a constant (BASE_URL) from a local constants file
import { BASE_URL } from "./constants";
// Create an Axios instance with some default configuration
const axiosInstance = axios.create({
    // Set the base URL for all requests made using this instance
    baseURL: BASE_URL,
    //A request timeout defines how long Axios should wait for a response from the server before giving up and throwing an error.
    // Set the maximum request timeout to 10 seconds (10000 ms)
    timeout: 10000,
    // Set default headers for all requests made using this instance
    headers: {
        "Content-Type": "application/json", // All data sent will be JSON
    }
});
//A request interceptor lets you modify a request before it is actually sent to the server.
// Add a request interceptor to the Axios instance
axiosInstance.interceptors.request.use(
    (config) => {
        // Get the token from local storage
        const accessToken = localStorage.getItem("token");
        // If a token exists, attach it to the Authorization header
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        // Return the modified config object so the request can proceed
        return config;
    },
    (error) => {
        // If there is an error in the request config, reject the promise
        return Promise.reject(error);
    }
);
// Export the configured Axios instance so it can be used in other files
export default axiosInstance;
