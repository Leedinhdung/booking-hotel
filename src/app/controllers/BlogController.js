class BlogController {
    //[GET]
    index(req, res) {
        res.render('blog');
    }
    // //[GET]
    // show(req, res) {
    //   res.send("home");
    // }
}
module.exports = new BlogController();
