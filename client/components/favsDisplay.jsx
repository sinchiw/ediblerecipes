import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './jobs-list.css';

const Recipe = props => (
	<div className="fav-recipe">
		<p>Recipe Name: {props.recipe.name}</p>
		{/* <p>Instructions: {props.recipe.instruction}</p> */}
	</div>
);


export default class FavDisplays extends Component {
	constructor(props) {
		super(props);
		this.state = { recipes: [] };

		// this.deleteFav = this.deleteFav.bind(this)
	}

	componentDidMount () {
		axios.get('http://localhost:3000/savedrecipes/')
			.then(response => {
				this.setState({ recipes: response.data })
			})
			.catch(function (error) {
				console.log(error)
			})
	}

	componentDidUpdate () {
		axios.get('http://localhost:3000/savedrecipes/')
			.then(response => {
				this.setState({ recipes: response.data })
			})
			.catch(function (error) {
				console.log(error)
			})
	}

	// deleteFav () {
	// 	axios.delete('http://localhost:3000/savedrecipes/delete/' + this.props.match.params.id)
	// 		.then((res) => {
	// 			console.log('Recipe successfully deleted!')
	// 		}).catch((error) => {
	// 			console.log(error)
	// 		})
	// }

	favList () {
		return this.state.recipes.map(function (recipe, i) {
			return <Recipe recipe={recipe} key={i} />
		})
	}


	render () {
		return (
			<div className="favlist">
				{this.favList()}
			</div>
		)
	}
}
