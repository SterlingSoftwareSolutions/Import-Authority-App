import authClient from "./authClient";

const register = (userInfo) => authClient.post("/register", userInfo);

export default { register, };
