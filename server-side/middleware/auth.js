const jwt=require('jsonwebtoken');

const auth=(req,res,next) => {
    const token=req.session.token;
    if(!token) return res.status(401).redirect('/admin/login');

    try{
        const verified =jwt.verify(token,process.env.jwt_SECRET);
        req.admin=verified;
        next();

    }
    catch(err){
        res.status(403).redirect('/admin/login');
    }
};
module.exports=auth;