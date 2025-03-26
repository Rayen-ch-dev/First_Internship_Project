require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const cors = require("cors");
const mongoose = require("mongoose");
const UserMessageModel = require("./models/Users");
const AdminModel = require("./models/Admins");



const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


app.use(express.json());
app.use(cors());


// Enable mongoose debug mode
mongoose.set('debug', true);

const username=process.env.USERNAME,
      password=process.env.PASSWORD,
      database=process.env.DATABASE;

const mongoDBConnectionString = `mongodb+srv://${username}:${password}@cluster0.fkspo.mongodb.net/${database}`


// Initial connection
mongoose.connect(mongoDBConnectionString)
.then(() => {
    console.log("Successfully connected to MongoDB.");
    startServer();
})
.catch(err => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
});




// Reconnect mechanism
mongoose.connection.on('disconnected', () => {
    console.log('Disconnected from MongoDB. Reconnecting...');
    mongoose.connect('mongodb+srv://challoufrayen09:NnXE2KXiE4vwPHz@cluster0.fkspo.mongodb.net/internshiip-db');
  });

//start server
function startServer() {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}

app.post("/createMessageUser", async (req, res) => {
    try {
        console.log("Received request body:", req.body);
        
        const newUser = new UserMessageModel(req.body);
        console.log("Created new user model:", newUser);
        newUser.sentAt=new Date();
        
        const savedUser = await newUser.save();
        console.log("Saved user to database:", savedUser);
        
    
        const verifyUser = await UserMessageModel.findById(savedUser._id);
        console.log("Verified user in database:", verifyUser);
        
        res.status(201).json(savedUser);
    } catch (err) {
        console.error("Error in createUser:", err);
        res.status(500).json({ error: err.message });
    }
});

app.get("/MessagesUsers", async (req, res) => {
    try {
        const users = await UserMessageModel.find();
        res.json(users);
    } catch (err) {
        console.error("Error fetching users:", err);
        res.status(500).json({ error: err.me });
    }
});





//Admin routes
app.get('/admins',async (req,res)=>{
    try{
        const admins=await AdminModel.find();
        res.json(admins);

    }
    catch(err){
        console.error(err);
        res.status(500).json({error:err.message});
    }
})






//register
app.post("/register",async (req,res)=>{
    const {username,password}=req.body;
    const admin= await AdminModel.findOne({username,password});
    admin && res.json({message:"admin exist"});

    const hashedPassword=bcrypt.hashSync(password,10);

    const newAdmin=new AdminModel({username:username,password:hashedPassword});
    await newAdmin.save();
    res.json({message:"admin created"})
   




})

//loged in
app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const admin = await AdminModel.findOne({ username });
 
  
    if (!admin) {
      return res.status(401).json({ error: "admin doesn't exist" });
    }
  
    if (!admin.password) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "username or password incorrect" });
    }
    admin.lastLogin=new Date();
    await admin.save();
  
    const token = jwt.sign({ id: admin._id , role:admin.role }, process.env.JWT_SECRET);
    res.json({ token, adminId: admin._id , role: admin.role ,lastLogin:admin.lastLogin});

  });
//update last Activity
app.put("/update/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { username, role } = req.body;
      
  
      const admin = await AdminModel.findByIdAndUpdate(
        id,
        { 
          username, 
          role, 
          lastActivity: new Date() 
        }, 
        { new: true }
      );
  
      if (!admin) return res.status(404).json({ message: "Admin not found" });
  
      res.status(200).json({ message: "Profile updated", admin });
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  });
//delete client message
app.delete('/delete/:id', async function (req, res) {
  try {
    const client_message = await UserMessageModel.findByIdAndDelete(req.params.id);

    if (!client_message) {
      return res.status(404).json({ message: "Client message not found" });
    }

    res.json({ message: "Client message deleted", deletedMessage: client_message });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

//delete admin
app.delete('/delete-admin/:id', async function (req, res) {
  try {
    const admin = await AdminModel.findByIdAndDelete(req.params.id);

    if (!admin) {
      return res.status(404).json({ message: "admin not found" });
    }

    res.json({ message: "Admin Deleted", deletedMessage: admin });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});


//update handeled message

app.put('/update-handled/:id', async function (req, res) {
  try {
    const { id } = req.params;
    const { handled } = req.body;

    const updatedClientMessage = await UserMessageModel.findByIdAndUpdate(
      id,
      { handled },
      { new: true }
    );

    if (!updatedClientMessage) {
      return res.status(404).json({ message: "Client message not found" });
    }

    res.status(200).json({ message: "Client message updated", updatedMessage: updatedClientMessage });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});



