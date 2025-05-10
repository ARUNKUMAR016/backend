const express = require("express");
const { Admin } = require("../models/adminModel");

const adminRouter = express.Router();

adminRouter.post("/insert", async (req, res) => {
  try {
    const { title, genre, about } = req.body;

    const data = new Admin({
      title,
      genre,
      about,
    });

    await data.save();
    res.json({ message: "inserted sucessfully", data: data });
  } catch (error) {
    res.status(400).send({ message: "data entered is not correct !" });
  }
});

adminRouter.get("/get", async (req, res) => {
  try {
    const data = await Admin.find(); // Correct usage
    res.json(data); // Return the data
  } catch (error) {
    res.status(500).send({ message: "getting data is stopped" });
  }
});


adminRouter.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Admin.findByIdAndDelete(id);
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: "Deletion failed" });
  }
});


module.exports = adminRouter;
