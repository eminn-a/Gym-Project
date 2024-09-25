import { clearUserData, getAccessToken, setUserData } from "./utils";
const host = import.meta.env.VITE_API_BASE_URL;

export const refreshToken = async () => {
  try {
    const response = await fetch(`${host}/users/refresh-token`, {
      method: "POST",
      credentials: "include",
    });

    if (response.ok) {
      const data = await response.json();
      // setUserData(data);
      return data;
    } else {
      clearUserData();
      throw new Error("Failed to refresh token");
    }
  } catch (error) {
    // clearUserData();
    throw new Error("Failed to refresh token");
  }
};
