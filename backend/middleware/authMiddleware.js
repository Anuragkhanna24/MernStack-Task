const jwt=require('jsonwebtoken');

const authenticate= (req, res, next)=>{
    const token=req.headers.authorization.split(' ')[1];

    if(!token)return res.status(401).json({error:'Access Denied'})

        try{
            const decode=jwt.verify(token,process.env.JWT_SECRET)
            req.user=decode;
            next();
        }catch{
            res.status(400).json({error:"Invalid Token"})
        }
}

module.exports = authenticate;