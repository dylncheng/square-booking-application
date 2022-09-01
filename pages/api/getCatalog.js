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