const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");

dotenv.config();

//MongoDB
connectDB();

const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", require("./routes/userRoutes"));

//port
app.get("/", (req, res) => {
  res.send("FitBalance360 App Server is Running!");

});
const PORT = process.env.PORT || 8000;

//listen
app.listen(PORT, () => {
  console.log(`Server Running ${PORT}`.bgGreen.white);
});
