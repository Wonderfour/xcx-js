
class UserSql {
  constructor(){

  }
  insertUser(parms){
    return  `INSERT INTO ydd_user(openid,unionid,create_time) SELECT '${parms.openid}','${parms.unionid}','${parms.create_time}' FROM DUAL WHERE NOT EXISTS(SELECT openid FROM ydd_user WHERE openid = '${parms.openid}');`;
  }
  getUserInfoByOpenId(parms){
    return `SELECT id, nick_name, avatarUrl,gender,city,province,country FROM ydd_user WHERE openid = '${parms.openid}'`
  }
}
const userSql = new  UserSql();
module.exports = userSql;