class HotelController {
    //[GET]
    index(req, res) {
        res.render('home');
    }
    //[GET]
    show(req, res) {
        res.send('home');
    }
}
module.exports = new HotelController();
