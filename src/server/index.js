
const express = require("express");
const app = express();
const http = require("http").Server(app);

const morgan = require("morgan");
const PORT = 3000;

app.use(morgan('dev'));
app.use(express.static(__dirname + '/../client/app'));
console.log(__dirname);

const api = require("./services/babyStore.api")(app,express);
app.use('/api', api);

// ROUTES //
app.get('*', function(req, res){
	res.sendFile(__dirname + '/../client/app/index.html');
});

http.listen(PORT, function (err) {
	if (err) {
		console.log(err);
	}else{
		console.log('API is running on port ' + PORT);
	}
});
