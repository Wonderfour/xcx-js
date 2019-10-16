class ArtSql {
  constructor(){

  }
  getArticleList(){
    return 'SELECT id,title,content,bigPic,littlePic,DATE_FORMAT(createTime, "%Y-%m-%d") AS createTime FROM ydd_article WHERE isBanner = "0"'
  }
  getArticleListBanner(){
    return 'SELECT id,title,content,bigPic,littlePic,DATE_FORMAT(createTime, "%Y-%m-%d") AS createTime FROM ydd_article WHERE isBanner = "1" LIMIT 4'
  }
  getArticleListById(parms){
    return `SELECT id,title,content,bigPic,type, DATE_FORMAT(createTime, "%Y-%m-%d") AS createTime FROM ydd_article WHERE id="${parms.id}"`
  }
}
const artSql = new  ArtSql();
module.exports = artSql;