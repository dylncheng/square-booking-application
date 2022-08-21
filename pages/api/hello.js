// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// Catalog
import { Client, Environment, ApiError } from "square";

const token = 'EAAAEOH5YElmKG06unvtXfxZM44aq0GuooL8UxPcsKzhgHpT-Mm7WTdomp19bbzr';

const client = new Client({
  accessToken: token,
  environment: Environment.Sandbox,
});

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
