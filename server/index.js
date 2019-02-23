require('dotenv').config()
const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema/schema');
const cors = require('cors');


const app = express();
app.use(cors());

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0-rpbtk.mongodb.net/test?retryWrites=true`, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
	console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({
	schema,
	graphiql: true
}));

app.listen(5000, () => {
	console.log('now listening for requests on port 5000');
});