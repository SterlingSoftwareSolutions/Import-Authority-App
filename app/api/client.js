import { create } from "apisauce";
import storage from "../auth/storage";

const client = async () => {

  // Creating an API
  let api = create({
    baseURL: "http://10.0.2.2:8000/api",
  });

  // Getting the token asynchronously
  let token = "NO TOKEN";
  token = await storage.getToken();

  // Setting the token in header
  api.setHeader("Authorization", "Bearer " + token);

  // Returning the generated API
  return api;
};

export default client;
