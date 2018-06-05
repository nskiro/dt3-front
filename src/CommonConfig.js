import jwt from 'jsonwebtoken';

const secretKey = 'supersecret';

const commonConfig = {
    theme: 'bootstrap',
    baseURL: window.location.protocol + '//' + window.location.hostname + ':5000/',
    verifyToken: (token) => {
        return jwt.verify(token, secretKey, function(err, decoded) {
            if(err) {
                console.log(err);
                return false;
            }
            return decoded;
        });
    },
    getUserInfoByToken: (token) => {
        return jwt.verify(token, secretKey, function(err, decoded) {
            if(err) {
                console.log(err);
                return false;
            }
            console.log(decoded);
            return decoded._doc;
        });
    }
}

export default commonConfig;