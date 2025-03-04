class BlogController {
    //[GET]
    index(req, res) {
        res.render('pages/blog/blog');
    }
    // //[GET]
    // show(req, res) {
    //   res.send("home");
    // }
}
module.exports = new BlogController();