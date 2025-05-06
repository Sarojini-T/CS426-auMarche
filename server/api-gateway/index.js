import express from "express";
import cors from "cors";
// http-proxy-middleware will replace the registry+api-gateway structure we used in class :D
import { createProxyMiddleware } from "http-proxy-middleware";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 8000;
/**
 * TODO: Add your service URLs here
 * The URL should be the same as the one you used in your respective service
 */
const USER_SERVICE_URL = "http://localhost:5050/users";

app.use(cors());

/**
 * TODO: Add the proxy middleware for your service.
 * Instead of /users, use the route name used for your service (e.g., /stores, /ingredients, etc.)
 * Copy the template I have below
 */
app.use(
  "/users",
  createProxyMiddleware({
    target: USER_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: { '^/users': '' },
  })
);

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
