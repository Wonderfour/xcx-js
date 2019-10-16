class AdminSql {
  constructor(){

  }
  addArticle(params){
    return  `INSERT INTO ydd_article(title,content,bigPic,littlePic,createTime,isBanner,type) VALUES ('${params.title}','${params.content}','${params.bigPic}','${params.littlePic}','${params.createTime}','${params.isBanner}','${params.type}')`;
  }
  getArticleList(){
    return 'SELECT id,title,bigPic,littlePic,type,isBanner, DATE_FORMAT(createTime, "%Y-%m-%d %H:%m:%S") AS createTime FROM ydd_article'
  }
}
const adminSql = new  AdminSql();
module.exports = adminSql;