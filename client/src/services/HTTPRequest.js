import toast from "react-hot-toast";
import { clearUserData, getAccessToken } from "../utils/utils";

const host = import.meta.env.VITE_API_BASE_URL;

const HTTPRequest = async (method, url, data) => {
  const options = {
    method,
    headers: {},
    credentials: "include",
  };

  const token = getAccessToken();

  if (token) {
    options.headers["X-Authorization"] = token;
  }

  if (data) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(host + url, options);
    if (response.ok != true) {
      if (response.status == 403 || response.status == 401) {
        clearUserData();
        location.reload();
      }

      const error = await response.json();
      throw new Error(error.message);
    }
    if (response.status == 204) {
      return response;
    } else {
      return response.json();
    }
  } catch (error) {
    toast.error(error.message);
  }
};

export const get = HTTPRequest.bind(null, "GET");
export const post = HTTPRequest.bind(null, "POST");
export const put = HTTPRequest.bind(null, "PUT");
export const remove = HTTPRequest.bind(null, "DELETE");
export const patch = HTTPRequest.bind(null, "PATCH");

// import { useContext } from "react";
// import { UserContext } from "../context/UserContext";

// export const useHTTPRequest = () => {
//   const { accessToken, setAccessToken, setUserData } = useContext(UserContext);

//   const HTTPRequest = async (method, url, data) => {
//     const options = {
//       method,
//       headers: {},
//     };

//     if (accessToken) {
//       options.headers["X-Authorization"] = accessToken;
//     }

//     if (data) {
//       options.headers["Content-Type"] = "application/json";
//       options.body = JSON.stringify(data);
//     }

//     try {
//       const response = await fetch(url, options);

//       if (!response.ok) {
//         if (response.status === 401 || response.status === 403) {
//           // Token expired or invalid, attempt to refresh
//           const refreshResponse = await fetch("/api/refresh-token", {
//             method: "POST",
//             credentials: "include",
//           });

//           if (refreshResponse.ok) {
//             const newTokens = await refreshResponse.json();
//             setAccessToken(newTokens.accessToken); // Update access token in memory
//             setUserData((prev) => ({ ...prev, accessToken: newTokens.accessToken })); // Update user data
//             // Retry the original request with the new access token
//             options.headers["X-Authorization"] = newTokens.accessToken;
//             const retryResponse = await fetch(url, options);
//             if (retryResponse.ok) {
//               return retryResponse.json();
//             }
//           } else {
//             // Refresh failed, clear user data
//             setUserData(null);
//             setAccessToken(null);
//             location.reload(); // Optionally reload the page to redirect to login
//           }
//         }

//         const error = await response.json();
//         throw new Error(error.message);
//       }

//       if (response.status === 204) {
//         return response;
//       } else {
//         return response.json();
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   return {
//     get: HTTPRequest.bind(null, "GET"),
//     post: HTTPRequest.bind(null, "POST"),
//     put: HTTPRequest.bind(null, "PUT"),
//     remove: HTTPRequest.bind(null, "DELETE"),
//     patch: HTTPRequest.bind(null, "PATCH"),
//   };
// };
