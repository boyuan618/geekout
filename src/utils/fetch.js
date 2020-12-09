import axios from "axios";

/**
 *  @description
 *  This is an example of how we use `axios` library to make a 
 *  function to call an API from our server.
 *  
 *  @summary
 *  This specific API endpoint can be found in ---> `src/pages/api/donations`
 *  You can manually peek into this API via visiting (from your browser) 
 *  ---> http://localhost:3000/api/donations
 * 
 *  @requires
 *  Your server to be running ---> Run `npm run dev` in your terminal
 */

export const getDonations = async () => {
  const { datadonations } = await axios.get("/api/donations");
  return datadonations;
};

export const getStock = async () => {
  const { datastock } = await axios.get("/api/stock");
  return datastock;
};
