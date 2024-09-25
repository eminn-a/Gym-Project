import { refreshToken } from "../utils/refreshToken";
import { clearUserData, getAccessToken, setUserData } from "../utils/utils";

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
    let response = await fetch(host + url, options);

    if (!response.ok) {
      if (response.status === 403 || response.status === 401) {
        try {
          const newToken = await refreshToken();
          options.headers["X-Authorization"] = newToken.accessToken;
          response = await fetch(host + url, options);

          if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
          }
        } catch (refreshError) {
          clearUserData();
          setTimeout(() => {
            window.location.assign("/");
          }, 4000);
          throw new Error(refreshError.message);
        }
      } else {
        const error = await response.json();
        throw new Error(error.message);
      }
    }

    if (response.status === 204) {
      return response;
    } else {
      return response.json();
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

// const refreshToken = async () => {
//   try {
//     const response = await fetch(`${host}/users/refresh-token`, {
//       method: "POST",
//       credentials: "include",
//     });

//     if (response.ok) {
//       const data = await response.json();
//       setUserData(data);
//       return data.accessToken;
//     } else {
//       clearUserData();
//       throw new Error("Failed to refresh token");
//     }
//   } catch (error) {
//     clearUserData();
//     throw new Error("Failed to refresh token");
//   }
// };

export const get = HTTPRequest.bind(null, "GET");
export const post = HTTPRequest.bind(null, "POST");
export const put = HTTPRequest.bind(null, "PUT");
export const remove = HTTPRequest.bind(null, "DELETE");
export const patch = HTTPRequest.bind(null, "PATCH");
