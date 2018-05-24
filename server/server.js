var express = require('express'),
    path = require('path'),
    app = express();

app.set('port', 8444);
app.use(express.static(path.join(__dirname, '../client')));

var server = app.listen(app.get('port'), function () {
  console.log('Decryption App: Legacy Version is running on port:' + app.get('port'));
});
