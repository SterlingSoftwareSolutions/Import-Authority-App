import { create } from "apisauce";
import {API_URL} from '@env'


const authClient = create({
  baseURL: API_URL,
});

export default authClient;
