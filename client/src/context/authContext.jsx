import React, { createContext, useState, useEffect } from "react";
import { getUserData } from "../utils/utils";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const checkUser = getUserData();
    if (checkUser) {
      setUserData(checkUser);
    }
  }, []);

  const adminEmail = "admin@abv.bg";

  return (
    <UserContext.Provider
      value={{ userData, setUserData, isAdmin: userData?.email === adminEmail }}
    >
      {children}
    </UserContext.Provider>
  );
};
