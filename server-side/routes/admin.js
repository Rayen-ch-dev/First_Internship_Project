/*const express = require('express');
const router=express.Router();
const bcrypt = require('bcrypt');
const jwt=require("jsonwebtoken");
const Admin =require('../models/Admis');
const auth = require('../middleware/auth');


router.post('http://localhost:3002/login',async (req, res) => {
    res.json("test")
    /*try{
        const admin =await Admin.findOne({username: req.body.username });
        if(!admin) return res.status(400).json({message: 'Admin not found'});

        const validPassword=await bcrypt.compare(req.body.password,admin.password);
        if(!validPassword) return res.status(400).json({message: 'Invalid password'});
        
        const token=jwt.sign({id: admin._id},process.env.JWT_SECRET);
        req.session.token =token;
        res.json({message:'logged in successfully'});
    }
    catch(err){
        console.error(err);
        res.status(500).json({error:err.message});
    }

});

/*router.get('/adminPanel',auth, async (req, res) => {
    const users=await UserModel.find();
    res.json(users)
});


module.exports=router;*/

