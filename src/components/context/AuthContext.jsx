import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../../api";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("access_token")
  );
  const [refreshToken, setRefreshToken] = useState(
    localStorage.getItem("refresh_token")
  );

  useEffect(() => {
    const refreshAccessToken = async () => {
      try {
        const response = await api.post("/refreshToken", {
          refreshToken: refreshToken,
        });
        const newAccessToken = response.data.access_token;
        setAccessToken(newAccessToken);
        localStorage.setItem("access_token", newAccessToken);
      } catch (error) {
        console.error("Failed to refresh access token");
        logout();
      }
    };

    const interceptor = api.interceptors.response.use(
      (response) => response,
      (error) => {
        const originalRequest = error.config;
        // Check if the error is due to an expired token
        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          // Refresh the access token
          return refreshAccessToken().then(() => {
            // Retry the original request with the new access token
            originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
            return api(originalRequest);
          });
        }
        return Promise.reject(error);
      }
    );

    return () => {
      // Clean up the interceptor when the component unmounts
      api.interceptors.response.eject(interceptor);
    };
  }, [accessToken, refreshToken]);

  const login = async (username, password) => {
    try {
      const response = await api.post("/login", { username, password });
      const newAccessToken = response.data.access_token;
      const newRefreshToken = response.data.refresh_token;
      setAccessToken(newAccessToken);
      setRefreshToken(newRefreshToken);
      localStorage.setItem("access_token", newAccessToken);
      localStorage.setItem("refresh_token", newRefreshToken);
    } catch (error) {
      // Handle the error case, such as displaying an error message
      console.error("Login failed");
    }
  };

  const logout = () => {
    setAccessToken(null);
    setRefreshToken(null);
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  };

  return (
    <AuthContext.Provider
      value={{ accessToken: accessToken, login: login, logout: logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;
