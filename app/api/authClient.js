import { create } from "apisauce";

const authClient = create({
  baseURL: "http://import-authority-api.ap-southeast-1.elasticbeanstalk.com/api",
});

export default authClient;
