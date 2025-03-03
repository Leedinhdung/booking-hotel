const homeRouter = require('./hotel');
const blogRouter = require('./blog');
function route(app) {
    app.use('/blog', blogRouter);
    app.use('/', homeRouter);
}

module.exports = route;
