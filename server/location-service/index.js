/**
 * To see the user-service and api-gateway in action, run npm i in each folder (/server, /server/user-service, /server/api-gateway)
 * Then run 'npm run dev' in the /server folder to start the API gateway and all services at once
 * Using thunderclient/curl/postman, you can test the API gateway at http://localhost:8000/users/location
 * 
 * 
 * 
 * This file boots up the express server and connects to the MongoDB cluster.
 * 1. To set up a service, copy this entire folder (user-service), run npm i inside it, and follow the template below.
 * 
 * 2. After completing your service, you need to add it to api-gateway/index.js
 * 
 * 3. In the package.json in /server, add your service to the "scripts" section as I've done with user-service to
 * run all services and the API gateway at once.
 * 
 * 4. I also separated our frontend into the client folder. In src/pages/ProfilePage, I have an example of how
 * I called users/location API route to get the location of user "Sarah" from the userDB database
 */

import { MongoClient, ServerApiVersion } from "mongodb";
import express from "express";
import cors from "cors";
//userRoutes is the API routes for the user service
import stores from "./storeRoutes.js";

const app = express();
//The PORT is different for each service, so make sure to change it for each service
const PORT = 5050;
// This is our shared account to access the MongoDB cluster. No need to change this
const uri = "mongodb+srv://CS426:timiscool@aumarche.omomaq8.mongodb.net/?retryWrites=true&w=majority&appName=auMarche"

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log(
     "Successfully connected to MongoDB"
    );
  } catch(err) {
    console.error(err);
}

//Replace with db name in auMarche cluster (ie, storeDB)
//Here, I'm demonstrating with the db name "userDB"
let db = client.db("storeDB");
  

app.use(cors());
app.use(express.json());
//The port for this service is 5050, so the service will be available at http://localhost:5050
//The line below registers the users routes with the express app, so the API calls are available at http://localhost:5050/users
app.use("/stores", stores);

// Start server
app.listen(PORT, () => {
  console.log(`Test service running on port ${PORT}`);
});

export default db;