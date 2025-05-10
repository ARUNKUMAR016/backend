const express = require("express");
const cors=require("cors");
const { dbConnect } = require("./database/dbConnect");
const adminRouter = require("./routes/adminRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/admin",adminRouter);

dbConnect()
  .then(() => {
    console.log("DB connected Sucessfully !! ");
    app.listen(4444, () => {
      console.log("server is running 4444 !!");
    });
  })
  .catch(() => {
    console.log("error in DB connection  !");
  });
