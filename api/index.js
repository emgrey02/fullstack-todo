const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes');

const port = 4000;
const mongoDB = 'mongodb://127.0.0.1/todos';

mongoose
	.connect(mongoDB, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		app.use(express.json());
		app.use(express.urlencoded({ extended: true }));
		app.use(cors());
		app.use('/api', routes);

		app.listen(port, () => {
			console.log(`Server is running on port ${port}`);
		});
	});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error'));
