const jwt = require ("jsonwebtoken");

class JWTConfig {

    verifiyToken(token){
        return new Promise((resolve, reject) => {
            try {
                if(!token) resolve({auth: false, msg: "Authentication Needed"});

                jwt.verify(token, process.env.KEY, (err, decoded) => {
                    if(err) resolve({auth: false, msg: "Invalid Token"});
                    resolve({auth: true, msg: "Authenticated"});
                });
            } catch (error) {
                reject(error);
            }
        });
    }

}

module.exports = new JWTConfig();