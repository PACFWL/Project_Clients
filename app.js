const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const moment = require('moment');
const Customer = require('./models/Customer');

const app = express();


app.engine('handlebars', engine({
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true
  },
  helpers: {
    eq: (a, b) => a === b,
    formatDate: (date) => moment(date).format('YYYY-MM-DD'),
    formatDateSimplified: (date) => moment(date).format('DD/MM/YYYY')
  }
}));
app.set('view engine', 'handlebars');


app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static('public'));


sequelize.sync().then(() => console.log('DB Synced')).catch((err) => console.log('Error: ' + err));


app.use('/customers', require('./routes/customerRoutes'));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


