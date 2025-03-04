const homeRouter = require('./hotelRouter');
const blogRouter = require('./blogRouter');
function route(app) {
    app.use('/blog', blogRouter);
    app.use('/', homeRouter);
}

module.exports = route;