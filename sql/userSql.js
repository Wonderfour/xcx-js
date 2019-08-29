
class UserSql {
  constructor(){

  }
  insertUser(parms){
    return  `INSERT INTO ydd_user(openid,unionid,create_time) SELECT '${parms.openid}','${parms.unionid}','${parms.create_time}' FROM DUAL WHERE NOT EXISTS(SELECT openid FROM ydd_user WHERE openid = '${parms.openid}');`;
  }
  getUserById(parms){
    return `SELECT id FROM ydd_user WHERE openid = '${parms.openid}'`
  }
}
const userSql = new  UserSql();
module.exports = userSql;