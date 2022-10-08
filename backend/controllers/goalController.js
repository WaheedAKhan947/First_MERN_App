// @description  Get goals
// @route        GET  /api/goals
// @access       Private

const getGoals = (req, res) => {
    res.status(200).json({message:"get goals"})
}

// @description  Create goals
// @route        POST  /api/goals
// @access       Private

const createGoals = (req, res) => {
    res.status(200).json({message:"goals created"})}

// @description  Update goals
// @route        PUT  /api/goals/:ID
// @access       Private

const updateGoal = (req, res) => {
    res.status(200).json({message:"update goals "+ req.params.id})
}

// @description  Delete goals
// @route        DELETE  /api/goals/:ID
// @access       Private

const deleteGoal = (req, res) => {
    res.status(200).json({message:"delete goals "+ req.params.id})
}


module.exports = {getGoals,createGoals,updateGoal,deleteGoal
}