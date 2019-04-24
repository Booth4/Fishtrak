import React, { Component } from 'react';
import NewFish from './NewFish.js';
import FishData from './FishData.js';
import firebase, { auth, provider } from './firebase.js';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			user: null
		}

		this.login = this.login.bind(this);
		this.logout = this.logout.bind(this);
	}

	componentDidMount() {
		auth.onAuthStateChanged((user) => {
			if (user) {
				this.setState({ user });
			} 
		});
	}

	login() {
		auth.signInWithPopup(provider) 
    .then((result) => {
      const user = result.user;
      this.setState({
        user
      });
    });
	}

	logout() {
		auth.signOut()
    .then(() => {
      this.setState({
        user: null
      });
    });
	}

	render() {
		if(!this.state.user){
			return (
				<button onClick={this.login}>Log In</button>  
			);
		}
		return (
			<div>
				<h2>FishTrak</h2>
				{this.state.user ?
    			<button onClick={this.logout}>Log Out</button>                
    			:
    			<button onClick={this.login}>Log In</button>              
				}
				<div className="row">
					<div className="col-md-6">
						<NewFish user={this.state.user}/>
					</div>
					<div className="col-md-6">
						<FishData/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;