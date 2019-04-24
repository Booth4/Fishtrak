import React, { Component } from 'react';
import NewFish from './NewFish.js';
import FishData from './FishData.js';
import firebase, { auth, provider } from './firebase.js';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			user: null,
			createNew: false
		}

		this.login = this.login.bind(this);
		this.logout = this.logout.bind(this);
		this.showTable = this.showTable.bind(this);
		this.createNew = this.createNew.bind(this);
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
				user: null,
				createNew: false
      });
    });
	}

	showTable() {
		this.setState({
			createNew: false
		});
	}

	createNew() {
		this.setState({
			createNew: true
		});
	}

	render() {
		return (
			<div>
				<div className="site-header">
				<h1 className="site-title">FishTrak</h1>
				<div>
				{this.state.user ?
				[(this.state.createNew ?
    			<button className="button-custom btn btn-info" onClick={this.showTable}>Cancel</button>                
    			:
    			<button className="button-custom btn btn-info" onClick={this.createNew}>New Fish</button>              
				),]
				: <></>
			}

				{this.state.user ?
    			<button className="button-custom btn btn-dark" onClick={this.logout}>Log Out</button>                
    			:
    			<button className=" button-custom btn btn-dark" onClick={this.login}>Log In</button>              
				}
				</div>
				</div>
				<div className="input-box">
					{this.state.createNew ?
						<NewFish onSubmit={() => this.setState({createNew: false})} user={this.state.user}/>
						:
						<FishData/>
					}
				</div>
			</div>
		);
	}
}

export default App;