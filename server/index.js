const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const EmployeeModel=require('./models/Employee.js')
const app=express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb://localhost:27017/employee");
app.post("/register", (req, res) => {
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.status(500).json({ error: "Error registering user", details: err }));
});

app.listen(3001,()=>{
    console.log("server is running");
    
})