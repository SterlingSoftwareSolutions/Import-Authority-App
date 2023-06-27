import { create } from "apisauce";
import storage from "../auth/storage";
import {API_URL} from '@env'


const client = async () => {

  let api = create({
    baseURL: API_URL,
  });

  let token = "NO TOKEN";
  token = await storage.getToken();

  api.setHeader("Authorization", "Bearer " + token);

  return api;
};

export default client;
