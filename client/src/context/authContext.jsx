// import React, { createContext, useState, useEffect } from "react";
// import { setAccessToken } from "../utils/utils";
// import { refreshToken } from "../utils/refreshToken";

// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const checkUser = await refreshToken();
//         if (checkUser) {
//           setUserData(checkUser);
//           setAccessToken(checkUser.accessToken);
//         }
//       } catch (error) {}
//     };

//     fetchUserData();
//   }, []);

//   const adminEmail = "admin@gmail.com";

//   return (
//     <UserContext.Provider
//       value={{
//         userData,
//         setUserData,
//         isAdmin: userData?.email === adminEmail ? true : null,
//       }}
//     >
//       {children}
//     </UserContext.Provider>
//   );
// };

import React, { createContext, useState, useEffect } from "react";
import { setAccessToken } from "../utils/utils";
import { refreshToken } from "../utils/refreshToken";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [isAdmin, setIsAdmin] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchUserData = async () => {
      setIsLoading(true);
      try {
        const checkUser = await refreshToken();
        if (checkUser) {
          setUserData(checkUser);
          setAccessToken(checkUser.accessToken);
          setIsAdmin(checkUser.email === "admin@gmail.com");
        }
      } catch (error) {
      } finally {
        setIsLoading(false);
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
        isLoading, // Can be used to handle loading UI states
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
