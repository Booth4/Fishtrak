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
	}
	render() {
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
						<NewFish/>
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