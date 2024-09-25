import React, { createContext, useState, useEffect } from "react";
import { getUserData } from "../utils/utils";
import { refreshToken } from "../utils/refreshToken";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const checkUser = await refreshToken();
        if (checkUser) {
          setUserData(checkUser);
        }
      } catch (error) {}
    };

    fetchUserData();
  }, []);

  const adminEmail = "admin@gmail.com";

  return (
    <UserContext.Provider
      value={{ userData, setUserData, isAdmin: userData?.email === adminEmail }}
    >
      {children}
    </UserContext.Provider>
  );
};
