import { create } from "apisauce";
import storage from "../auth/storage";

const client = async () => {

  let api = create({
    baseURL: "http://10.0.2.2:8000/api",
  });

  let token = "NO TOKEN";
  token = await storage.getToken();

  api.setHeader("Authorization", "Bearer " + token);

  return api;
};

export default client;
