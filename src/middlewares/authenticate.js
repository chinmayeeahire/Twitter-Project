import passport from 'passport';
//middleware
export const authenticate=(req, res, next)=>{
    passport.authenticate('jwt', (err, user, data)=>{
        if(err) next(err);
        if(!user){
            return res.status(401).json({
                message: "Unauthorized access no token",
           });
        }
        req.user=user;  // we don't want frontend to embed userid directly to service coz sensitive data, so from jsonwebtoken we will extract userId, manually insert it as a key-value pair
        next();
    })(req, res, next);
    
}