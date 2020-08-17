// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// // import "./jobs-list.css";

// const Recipe = (props) => (
//   <div className="result-recipe">
//     <p>Recipe Name: {props.recipe.name}</p>
//     {/* <p>Instructions: {props.recipe.instruction}</p> */}
//   </div>
// );

// export default class DisplayRecipe extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { recipes: [] };

//     // this.deleteFav = this.deleteFav.bind(this)
//   }

//   componentDidMount() {
//     axios
//       .get("http://localhost:3000/resultrecipes/")
//       .then((response) => {
//         console.log("this is the response!", response);
//         console.log("response.dataaa", response.data);
//         this.setState({ recipes: response.data });
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }

//   componentDidUpdate() {
//     axios
//       .get("http://localhost:3000/resultrecipes/")
//       .then((response) => {
//         this.setState({ recipes: response.data });
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }

//   // deleteFav () {
//   // 	axios.delete('http://localhost:3000/savedrecipes/delete/' + this.props.match.params.id)
//   // 		.then((res) => {
//   // 			console.log('Recipe successfully deleted!')
//   // 		}).catch((error) => {
//   // 			console.log(error)
//   // 		})
//   // }

//   resultRecipe() {
//     return this.state.recipes.map(function (recipe, i) {
//       return <Recipe recipe={recipe} key={i} />;
//     });
//   }

//   render() {
//     return <div className="favlist">{this.resultRecipe()}</div>;
//   }
// }
