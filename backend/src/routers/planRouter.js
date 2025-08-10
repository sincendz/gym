import express from "express";
import { Plan } from "../models/Plan.js";
const router = express.Router();

router.get("/get_all_plans", async (req, res) => {
  try {
    const plans = await Plan.findAll();
    res.status(200).json({ data: plans });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/get_plan_by_id/:id", async (req, res) => {
  try {
    const plan = await Plan.findOne({ where: { id: req.params.id } });
    if (plan) {
      res.status(200).json({ data: plan });
    } else {
      res.status(404).json({ error: "Plan not found" });
    }
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

router.put("/update_plan_by_id/:id", async (req, res) => {
  try {
    const plan = await Plan.findOne({ where: { id: req.params.id } });
    if (plan) {
      plan.set({
        name: req.body.name,
        number_of_days: req.body.number_of_days,
        price: req.body.price,
        description: req.body.description,
      });
      await plan.save();
      res.status(200).json({ message: "Plan updated", data: plan });
    } else {
      res.status(404).json({ message: "Plan not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/delete_plan_by_id/:id", async (req, res) => {
  try {
    const deleted = await Plan.destroy({ where: { id: req.params.id } });
    if (deleted) {
      res.status(200).json({ data: "Plan deleted" });
    } else {
      res.status(404).json({ error: "Id not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
