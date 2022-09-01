import { client } from "../../squareConfig.js";

export const getLocation = async () => {
    try {
      const response = await client.locationsApi.listLocations();
      return response.result;
    } catch(error) {
      console.log(error);
    }
}