class ArtSql {
  constructor(){

  }
  getArticleList(){
    return 'SELECT id,title,content,bigPic,littlePic,createTime FROM ydd_article WHERE isBanner = "0"'
  }
  getArticleListBanner(){
    return 'SELECT id,title,content,bigPic,littlePic,createTime FROM ydd_article WHERE isBanner = "1" LIMIT 4'
  }
  getArticleListById(parms){
    return `SELECT * FROM ydd_article WHERE id="${parms.id}"`
  }
}
const artSql = new  ArtSql();
module.exports = artSql;