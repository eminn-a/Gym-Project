const host = import.meta.env.VITE_API_BASE_URL;

export const refreshToken = async () => {
  try {
    const response = await fetch(`${host}/users/refresh-token`, {
      method: "POST",
      credentials: "include",
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Failed to refresh token");
    }
  } catch (error) {
    throw new Error("Failed to refresh token");
  }
};
