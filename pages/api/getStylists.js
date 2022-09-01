import { client } from "../../squareConfig.js";

export const getStylists = async () => {
    try {
      const response = await client.bookingsApi.listTeamMemberBookingProfiles(true);
      return response.result;
    } catch(error) {
      console.log(error);
    }
  }