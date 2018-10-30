const express = require('express');
const path = require('path');
const data = require('./apiData');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.disable('etag');


app.get('/:category', function (req, res) {
	let find = data.filter((el => {
		return el.product.category == req.params.category
	}));
	res.json(find);
	console.log('found category');
});

app.get('/item/:id', function (req, res) {
	let find = data.filter((el => {
		return el.product.id == req.params.id
	}))
	res.json(find)
	console.log('found item')
})

// An api endpoint that returns a short list of items
app.get('/api/data', (req, res) => {
	var questions = data
	res.json(questions);
	console.log('Sent list of items');

});




// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/client/public/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);