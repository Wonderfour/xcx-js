
class UserSql {
  constructor(){

  }
  insertUser(parms){
    return  `INSERT INTO ydd_user(openid,unionid,createTime) SELECT '${parms.openid}','${parms.unionid}','${parms.create_time}' FROM DUAL WHERE NOT EXISTS(SELECT openid FROM ydd_user WHERE openid = '${parms.openid}');`;
  }
  getUserInfoByOpenId(parms){
    return `SELECT id, nickName, avatarUrl,gender,city,province,country FROM ydd_user WHERE openid = '${parms.openid}'`
  }
  inSertUserInfoByOpenId(parms){
    const userInfo = JSON.parse(parms.userInfo);
    return `UPDATE ydd_user SET nickName = '${userInfo.nickName}', gender = '${userInfo.gender ? userInfo.gender : 0}',avatarUrl = '${userInfo.avatarUrl}',city = '${userInfo.city}',country='${userInfo.country}', language = '${userInfo.language}',province='${userInfo.province}',updateTime='${parms.updateTime}'
    WHERE openid ='${parms.openid}'`
  }
}
const userSql = new  UserSql();
module.exports = userSql;