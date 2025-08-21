import { User } from "../models/User.js";
import express from "express";

const router = express.Router();

router.get("/get_all_users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json({ data: users });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// exp req
//http://localhost:3000/users/get_user_by_id?userId=1
router.get("/get_user_by_id/`{userid}`", async (req, res) => {
  try {
    const userId = req.query.userId;
    const user = await User.findOne({ where: { id: userId } });
    if (user) {
      res.status(200).json({ data: user });
    } else {
      res.status(404).json({ detail: "User not found!" });
    }
  } catch (error) {
    res.status(500).json({ error: `${error}` });
  }
});

router.post("/create_user", async (req, res) => {
  try {
    const user = await User.create({
      firstName: req.body.name,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      type: req.body.type,
      born_date: req.body.born_date,
      cell_phone_number: req.body.cell_phone_number,
      isActive: req.body.isActive,
      createdAt: req.body.createdAt,
      updatedAt: req.body.updatedAt,
    });
    res.status(201).json({ data: user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/", (req, res) => {
  res.send("Oie user");
});

export default router;
