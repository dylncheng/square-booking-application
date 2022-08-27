// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { client } from "../../squareConfig.js";

export const getCatalog = async () => {
  try {
      const response = await client.catalogApi.listCatalog();
      return response.result;
      //console.log(response.result);
      //console.log(response.result.objects[0].categoryData.name);
    } catch(error) {
      return error;
    }
}

export const getStylists = async () => {
  try {
    const response = await client.bookingsApi.listTeamMemberBookingProfiles(true);
    return response.result;
  } catch(error) {
    console.log(error);
  }
}

export const getLocation = async () => {
  try {
    const response = await client.locationsApi.listLocations();
    return response.result;
  } catch(error) {
    console.log(error);
  }
}
