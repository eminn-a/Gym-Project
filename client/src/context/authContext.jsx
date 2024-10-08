import React, { createContext, useState, useEffect } from "react";
import { setAccessToken } from "../utils/utils";
import { refreshToken } from "../utils/refreshToken";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [isAdmin, setIsAdmin] = useState(undefined);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const checkUser = await refreshToken();
        if (checkUser) {
          setUserData(checkUser);
          setAccessToken(checkUser.accessToken);
          setIsAdmin(checkUser.email === "admin@gmail.com");
        }
      } catch (error) {
      } finally {
      }
    };

    fetchUserData();
  }, []);

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        setIsAdmin,
        isAdmin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
