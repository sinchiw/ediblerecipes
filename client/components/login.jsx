// import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from "react";
// import '../src/App.css';
<<<<<<< HEAD
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   name: '',
      password: "",
      email: "",
    };
    // this.onChangeUsername = this.onChangeUsername.bind(this);
    // this.onChangePassword = this.onChangePassword.bind(this);
    // this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
=======
import axios from 'axios';
import { withCookies } from 'react-cookie';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			//   name: '',
			password: '',
			email: '',
			// isLogginIn: false,
		};
		// this.onChangeUsername = this.onChangeUsername.bind(this);
		// this.onChangePassword = this.onChangePassword.bind(this);
		// this.onChangeEmail = this.onChangeEmail.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
>>>>>>> 974608361c64ca5e16933b753bfcd3bec981b024

	onChange (e) {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({
			...this.state,
			[name]: value,
		});
	}

	onSubmit (e) {
		e.preventDefault();

		const user = {
			password: this.state.password,
			email: this.state.email,
		};

		console.log('user in login', user);

		// axios
		//   .post('http://localhost:3000/login', user)
		//   .then((res) => console.log(res.data));

<<<<<<< HEAD
    console.log("user in login", user);
=======
		fetch('http://localhost:3000/login', {
			method: 'POST',
			body: JSON.stringify(user),
			// body: user,
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include',
		})
			.then((response) => response.json())
			.then((data) => console.log('FETCH data', data))
			.catch((err) => console.log('ERROR in login fetch', err));
		console.log("COOKIES IS HERE:", this.props.cookies)
>>>>>>> 974608361c64ca5e16933b753bfcd3bec981b024

		// this command above returns you to the homepage
		if (this.props.cookies.cookies.loggedIn) {
			this.props.history.push('/recipesform');
		}
	}

<<<<<<< HEAD
    fetch("http://localhost:3000/login", {
      method: "POST",
      body: JSON.stringify(user),
      // body: user,
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => console.log("FETCH data", data))
      .catch((err) => console.log("ERROR in login fetch", err));

    this.props.history.push("/login");
    // this command above returns you to the homepage
  }

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h2>Login</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Email: </label>
            <input
              name="email"
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={this.onChange}
            />
          </div>
=======
	render () {
		return (
			<div style={{ marginTop: 20 }}>
				<h2>Login</h2>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Email: </label>
						<input
							name="email"
							type="text"
							className="form-control"
							value={this.state.email}
							onChange={this.onChange}
						/>
					</div>
>>>>>>> 974608361c64ca5e16933b753bfcd3bec981b024

					<div className="form-group">
						<label>Password </label>
						<input
							name="password"
							type="password"
							className="form-control"
							value={this.state.password}
							onChange={this.onChange}
						/>
					</div>

					{/* <div className="form-group">
						<label>Email: </label>
						<input type="text"
							className="form-control"
							value={this.state.email}
							onChange={this.onChangeEmail}
						/>
					</div> */}

					<div className="form-group">
						<input type="submit" value="Login" className="btn btn-primary" />
					</div>
				</form>
			</div>
			// </div>
		);
	}
}

export default withCookies(Login)
