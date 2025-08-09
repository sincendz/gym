import express from "express";
import { Plan } from "../models/Plan.js";

const router = express.Router();

router.get("/gel_all_plans", async (req, res) => {
  try {
    const plans = await Plan.findAll();
    res.status(201).json({ data: plans });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/create_plan", async (req, res) => {
  try {
    const plan = await Plan.create({
      name: req.body.name,
      number_of_days: req.body.number_of_days,
      price: req.body.price,
      description: req.body.description,
    });
    res.status(201).json({ data: plan });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
