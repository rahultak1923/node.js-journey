const { validateToken } = require("../services/authentication");

function checkForAuthenticationCookie(cookieName){
    return(req,res,next)=>{
        const tokenCookieValue = req.coolies[cookieName];
        if(!tokenCookieValue){
            next();
        }
        try {
        const userPayload = validateToken(tokenCookieValue)
        req.user = userPayload;
        next();  } catch (error) {
            
        }
        next();
    }
}

module.exports = {
    checkForAuthenticationCookie,
}