// Catalog
import { Client, Environment, ApiError } from "square";

const token = 'EAAAEOH5YElmKG06unvtXfxZM44aq0GuooL8UxPcsKzhgHpT-Mm7WTdomp19bbzr';

const client = new Client({
  accessToken: token,
  environment: Environment.Sandbox,
});

export { client };