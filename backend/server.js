const express = require("express");
const cors = require("cors");

// Load express const
const port = process.env.PORT || 4000;
const app = express();

// Import mongoose database connection
const Database = require("./db/connection");

// Parsing body and url
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Cors
app.use(cors());

// Load the .env file
require("dotenv").config();

// Initialize routes
const { userRouter } = require("./routers/userRouter");

// Route
app.use("/api/users", userRouter);

// Connect to DB and listening to the server
app.listen(process.env.BACKEND_PORT, async () => {
  let uri = process.env.MONGO_URI;
  const DateBase = new Database(uri);
  await DateBase.connectToDB();
  console.log(`[+] Listening on PORT: ${process.env.BACKEND_PORT}`);
});
