class ArtSql {
  constructor(){

  }
  getArticleList(parms){
    return 'SELECT id,title,content,bigPic,littlePic,createTime FROM ydd_article'
  }
  getArticleListById(parms){
    return `SELECT * FROM ydd_article WHERE id="${parms.id}"`
  }
}
const artSql = new  ArtSql();
module.exports = artSql;