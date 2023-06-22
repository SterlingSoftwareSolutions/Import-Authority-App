import { create } from "apisauce";
import storage from "../auth/storage";

const client = async () => {

  let api = create({
    baseURL: "http://import-authority-api.ap-southeast-1.elasticbeanstalk.com/api",
  });

  let token = "NO TOKEN";
  token = await storage.getToken();

  api.setHeader("Authorization", "Bearer " + token);

  return api;
};

export default client;
