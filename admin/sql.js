class AdminSql {
  constructor(){

  }
  addArticle(params){
    return  `INSERT INTO ydd_article(title,content,bigPic,littlePic,createTime,isBanner,type) VALUES ('${params.title}','${params.content}','${params.bigPic}','${params.littlePic}','${params.createTime}','${params.isBanner}','${params.type}')`;
  }
  updateArticle(params){
    // return  `INSERT INTO ydd_article(title,content,bigPic,littlePic,createTime,isBanner,type) VALUES ('${params.title}','${params.content}','${params.bigPic}','${params.littlePic}','${params.createTime}','${params.isBanner}','${params.type}')`;
    return `UPDATE ydd_article SET title = '${params.title}', content = '${params.content}', bigPic = '${params.bigPic}', littlePic = '${params.littlePic}', updateTime = '${params.updateTime}', isBanner = '${params.isBanner}', type = '${params.type}' WHERE id = '${params.id}'`
  }
  getArticleList(){
    return 'SELECT id,title,bigPic,littlePic,type,isBanner, DATE_FORMAT(createTime, "%Y-%m-%d %H:%m:%S") AS createTime,DATE_FORMAT(updateTime, "%Y-%m-%d %H:%m:%S") AS updateTime FROM ydd_article'
  }
  getArticleById(parms){
    return `SELECT id,title,content,bigPic,type,isBanner, DATE_FORMAT(createTime, "%Y-%m-%d") AS createTime FROM ydd_article WHERE id="${parms.id}"`
  }
}
const adminSql = new  AdminSql();
module.exports = adminSql;