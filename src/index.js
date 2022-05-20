const express = require('express');
const app = express();
const morgan = require('morgan');

require("./database/index");

//settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)
app.use(express.static(__dirname));

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/templates/index.html");
  });
app.use('/api/', require('./routes/index'));
app.use('/api/owner', require('./routes/owner'));
app.use('/api/condo', require('./routes/condo'));
app.use('/api/house', require('./routes/house'));

//starting server
app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')}
    open sv: http://localhost:${app.get('port')}/api/`);
});