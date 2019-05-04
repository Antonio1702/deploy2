const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./config/keys')


const app = express();
app.use(bodyParser.json());

require('./models/Gatos');
mongoose.connect(keys.MONGO_URL);

require('./routes/gatosRoutes')(app);

/*app.get('/', (req, res) => {
    res.send('si funciona');
})*/
app.listen(process.env.PORT || 5000);
//alt 124 para pibe