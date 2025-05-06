/**
 * This file boots up the express server and connects to the MongoDB cluster.
 * To set up a service, copy this entire folder (user-service) and follow the template below.
 * Also, in the package.json in /server, add your service to the "scripts" section as I've done with user-service to
 * run all services and the API gateway at once.
 * 
 * I also separated our frontend into the client folder. In src/pages/ProfilePage, I have an example of how
 * I called users/location API route to get the location of user "Sarah" from the userDB database
 */

import { MongoClient, ServerApiVersion } from "mongodb";
import express from "express";
import cors from "cors";
//userRoutes is the API routes for the user service
import users from "./userRoutes.js";

const app = express();
//The PORT is different for each service, so make sure to change it for each service
const PORT = 5050;
// This is the URI Mongo uses to connect to the cluster. ONLY replace the <username> and <password> with your own.
const uri = "mongodb+srv://<username>:<password>@aumarche.omomaq8.mongodb.net/?retryWrites=true&w=majority&appName=auMarche"

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
let db = client.db("userDB");
  

app.use(cors());
app.use(express.json());
//The port for this service is 5050, so the service will be available at http://localhost:5050
//The line below registers the test routes with the express app, so the API calls are available at http://localhost:5050/users
app.use("/users", users);

// Start server
app.listen(PORT, () => {
  console.log(`Test service running on port ${PORT}`);
});

export default db;