import { useContext } from "react";
import client from "../api/client";
import AuthContext from "./context";
import authStorage from "./storage";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (authToken, user) => {
    setUser(user);
    authStorage.storeToken(authToken);
  };

  const logOut = async () => {
    let api = await client();
    api.post("/logout").then((response) => {
      if (response.ok) {
        setUser(null);
        authStorage.removeToken();
      }
    });
  };

  const updateUser = async () => {
    let api = await client();
    api.get("/user").then((response) => {
      console.log(response.data);
      setUser(response.data);
    });
  }

  const getUser = async () => {
    console.log('getting user');
    return user;
  }

  return { user, logOut, logIn, updateUser, getUser };
};

//custom hook for business logic
