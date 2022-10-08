const express = require("express");
const router = express.Router();
const {
  getGoals,
  createGoals,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

router.route("./").get(getGoals).post(createGoals)
router.route("./:id").put(updateGoal).delete(deleteGoal)

module.exports = router
