import { useContext } from "react";
import client from "../api/client";
import AuthContext from "./context";
import authStorage from "./storage";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (authToken, user) => {
    console.log(user);
    setUser(user);
    authStorage.storeToken(authToken);
  };

  const logOut = async () => {
    let api = await client();
    api.post("/logout").then((response) => {
      console.log(response);
      if (response.ok) {
        setUser(null);
        authStorage.removeToken();
      }
    });
  };

  return { user, logOut, logIn };
};

//custom hook for business logic
