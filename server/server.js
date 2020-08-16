const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const userController = require('./controllers/userController.js');
const cookieController = require('./controllers/cookieController.js');
const edibleRecipeController = require('./controllers/edibleRecipeController.js');
const app = express();
const PORT = 3000;
const cors = require('cors');

// const db = require("./models/edibleRecipesModels.js");

app.use(cors());
app.use(express.json()); // --> Same as body parser
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// app.get("/", userController.getAllUsers, (req, res) =>
//   res.status(200).json(res.locals.alluser)
// );

app.get('/', cookieController.setCookie, (req, res) => {
	res.status(200);
});

// homepage - login;
app.post(
	'/login',
	userController.verifyUser,
	cookieController.setSSIDCookie,
	(req, res) => res.redirect('/search')
	// res.status(200).json(res.locals.user)
);

// // create a new account
app.post(
<<<<<<< HEAD
	'/signUp',
	userController.createUser,

	cookieController.setSSIDCookie,
	(req, res) => {
		res.redirect('/search');
		// res.status(200).json(res.locals.user);
	}
=======
  '/signUp',
  userController.hashPassword,
  userController.createUser,
  cookieController.setSSIDCookie,
  (req, res) => {
    res.redirect('/search');
    // res.status(200).json(res.locals.user);
  }
>>>>>>> 192b8a95989cf1be09e5a828ec1bd88d4b1d89c9
);
//
// // search page //two middleware func
app.get(
	'/search',
	// edibleRecipeController.getRecipes,
	(req, res) => {
		res.send('Hello');
	}
);

// search results - recipe links and videos
// app.get("/results", (req, res) => {
//   res.send("Hello");
// });

// // saved recipes
// app.get("/savedRecipes", userController.getSavedRecipes, (req, res) => {
//   res.send(res.locals.recipes);
// });

// //catch all router handlers
app.use((req, res) => {
	console.log('catch-all route handler is working');
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
