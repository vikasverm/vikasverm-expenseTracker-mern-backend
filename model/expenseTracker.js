const mongoose = require('mongoose');
const expenseSchema=mongoose.Schema({
    expenseItem:
    {
        type:String
    },
    expensePrice:
    {
        type:Number
    },
    })

    const ExpenseModel=mongoose.model("expenseTracker",expenseSchema)
    module.exports=ExpenseModel;
