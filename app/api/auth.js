import authClient from "./authClient";

const login = (username, password) => authClient.post("/login", { username, password });

export default {
  login,
};


