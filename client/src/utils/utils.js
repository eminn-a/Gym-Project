export function setUserData(data) {
  localStorage.setItem("user", JSON.stringify(data));
}
export function getUserData() {
  return JSON.parse(localStorage.getItem("user"));
}

export function clearUserData() {
  localStorage.removeItem("user");
}

let accesToken = null;

export function getAccessToken() {
  return accesToken;
}

export function setAccessToken(newToken) {
  accesToken = newToken;
}
