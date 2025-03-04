const express = require('express');
const { engine } = require('express-handlebars'); // Import đúng cách cho phiên bản 5.x hoặc cao hơn

const app = express();
const port = 3000;
const route = require('./routes');
app.use(express.static('src/public'));
// Template engine
app.engine('.hbs', engine({ extname: '.hbs' })); // Sử dụng engine() để tạo instance
app.set('view engine', '.hbs');
app.set('views', 'src/resources/views');

route(app);

app.listen(port);