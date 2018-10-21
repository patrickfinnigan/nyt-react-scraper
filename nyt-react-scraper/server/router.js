const path = require('path');
const db = require('./controllers/controller');

module.exports = function(app) {
    // Ensures your react app is being served at all times
    app.get('*', function(req, res, next){ 
        res.sendFile(__dirname, '../client/build/index.html');
    });

    app.post("/save", function (req, res, next) {
        db.save(req, res)
    });   
    // Wire up routes with calls to your database controllers here!
}