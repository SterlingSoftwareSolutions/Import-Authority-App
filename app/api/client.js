import { create } from "apisauce";
import storage from "../auth/storage";

const client = create({
  baseURL: "http://10.0.2.2:8000/api",
  headers: {
    Authorization: "Bearer " + storage.getToken(),
  },
});

export default client;
