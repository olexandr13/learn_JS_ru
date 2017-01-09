function Article() {
  this.created = new Date();
  Article.lastDate = this.created;
  Article.amount++;
}
Article.amount = 0;
Article.showStats = function() {
    console.log(this.amount);
    console.log(this.lastDate);
}

//testing
new Article();
new Article();
Article.showStats();
new Article();
Article.showStats();