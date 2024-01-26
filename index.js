const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
const ExpenseModel=require('./model/expenseTracker');
const app = express()
const port = 3001
app.use(cors());
app.use(express.json())
mongoose.connect('mongodb://127.0.0.1:27017/expenseTracker');
app.post("/add",(req,res)=>
{
    const body=req.body;
    ExpenseModel.create({
        expenseItem:body.expenseItem,
        expensePrice:body.expensePrice
    }).then((todo) => res.json(todo))
    .catch((err) => res.json(err));
   
})
app.get("/get", (req, res) => {
    ExpenseModel.find({})
  
      .then((todo) => res.json(todo))
      .catch((err) => res.json(err));
  });
  app.post("/update", async (req, res) => {
    const{_id,expenseItem,expensePrice}=req.body
     ExpenseModel.findByIdAndUpdate(_id,{expenseItem,expensePrice})
      .then((todo) => res.send({todo:"success"}))
      .catch((err) => res.json(err));
    
  })

  app.delete("/deleteItem/:id",(req,res)=>
  {
const id=req.params.id;
ExpenseModel.findByIdAndDelete({ _id: id })
.then((todo) => res.json(todo))
.catch((err) => res.json(err));
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))