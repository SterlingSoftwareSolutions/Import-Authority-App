import client from "./client";

const endpoint = "/applications";

// function to retrieve a list of listings from the server.
const getListings = () => client.get(endpoint);

export default {
  getListings,
};
