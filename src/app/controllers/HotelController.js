class HotelController {
  //[GET]
  index(req, res) {
      res.render('home');
  }
  //[GET]
  show(req, res) {
      res.render('pages/hotel/detailHotel');
  }
  //[GET]
  allHotels(req, res) {
      res.render('pages/hotel/allHotels');
  }
}
module.exports = new HotelController();