const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/UserSchema");
const Doctor = require("./models/DoctorSchema");
const cors = require("cors");
const app = express();
// const http = require("http");
const port=5001

app.use(express.json());
app.use(cors());

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://harshitavyas23:Icecream1234@cluster0.th4zntl.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};
connectDB().then(() => {
  app.listen(port, (err) => {
    if (err) {
      console.error("Error starting the server:", err);
    } else {
      console.log(`Server is running on port ${port}`);
    }
  });
});

app.post("/signup", async (req, resp) => {
  try {
    let user = new User(req.body);
    let result = await user.save();
    resp.send(result);
  } catch (error) {
    resp.status(500).json({ error: "Error occurred while signing up" });
  }
});
app.post("/signupdoctor", async (req, resp) => {
  try {
    let user = new Doctor(req.body);
    let result = await user.save();
    resp.send(result);
  } catch (error) {
    resp.status(500).json({ error: "Error occurred while signing up" });
  }
});

app.post("/login", async (req, resp) => {
  if (req.body.email && req.body.password) {
    const user = await User.findOne(req.body).select("-password");
    if (user) {
      resp.send(user);
    } else {
      resp.send({ result: "No user found" });
    }
  } else {
    resp.send({ result: "Enter both email and password" });
  }
});
app.put("/updateuser/:id", async (req, resp) => {
  // try {
  let result = await User.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  let updatedUser = await User.findOne({ _id: req.params.id });
  resp.send(updatedUser);
});
app.get("/getdoctors", async (req, resp) => {
  try {
    let doctors = await Doctor.find();
    if (doctors.length > 0) {
      resp.send(doctors);
    } else {
      resp.send({ result: "No products found" });
    }
  } catch {
    resp.status(401);
  }
});
app.get("/doctor/:id", async (req, resp) => {
  let doctor = await Doctor.findOne({ _id: req.params.id });
  if (doctor) {
    
    resp.send(doctor);
  } else {
    resp.send({ result: "Doctor not found" });
  }
});

// app.listen(port)


// Your routes and other code...

