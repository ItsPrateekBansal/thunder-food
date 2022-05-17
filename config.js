const envar = require('./envar');
const TWO_HOURS = 1000*60*60*24;
module.exports = {
    MONGODB: `mongodb+srv://${envar.MONGODB_USERID}:${envar.MONGODB_PASSWD}@${envar.MONGODB_CLUSID}.g5cto.mongodb.net/merng?retryWrites=true&w=majority`,
    PORT : 3000,
    SESS_LIFETIME : TWO_HOURS,
    SESS_NAME : 'sid',
    SESS_SECRET : 'iamprateek,hello',
    RAZOR_PAY_KEY_ID: 'rzp_test_tnPHGLOSuXuFNE',
    RAZOR_PAY_KEY_SECRET: 'tvIv3jspaAK7ZCVPQ19U12vJ',
}