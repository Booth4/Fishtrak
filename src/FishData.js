import React, { Component } from 'react';
import NewFish from './NewFish.js';
import firebase, { auth, provider } from './firebase.js';
import './App.css';

class FishData extends Component {
	constructor() {
		super();
		this.state = {
			fish: []
		}
	}

	componentDidMount() {
		const itemsRef = firebase.database().ref('fish');
		itemsRef.on('value', (snapshot) => {
			let fish = snapshot.val();
			let newState = [];
			for (let fishItem in fish) {
				newState.push({
					id: fishItem,
					length: fish[fishItem].length,
					weight: fish[fishItem].weight
				});
			}
			this.setState({
				fish: newState
			});
		});
	}

	render() {
		return (
			<div className="">
	  	  <table>
  		    {this.state.fish.map((fishItem) => {
  		      return (
  		        <li key={fishItem.id}>
  		          <p>Length: {fishItem.length}</p>
  		          <p>Weight: {fishItem.weight}</p>
  		        </li>
  		      )
  		    })}
  		  </table>
  		</div>
		);
	}
}

export default FishData;