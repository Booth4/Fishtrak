import React, { Component } from 'react';
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
					user: fish[fishItem].user,
					length: fish[fishItem].length,
					weight: fish[fishItem].weight,
					lineLength: fish[fishItem].lineLength,
					sinkerWeight: fish[fishItem].sinkerWeight,
					lure: fish[fishItem].lure,
					color: fish[fishItem].color,
				});
			}
			this.setState({
				fish: newState
			});
		});
	}

	sort(key) {
		var newFish = this.state.fish;
		
		newFish.sort(function(a, b) {
			return a[key] - b[key];
		});
		
		/*newFish.sort(function(a, b){
			alert("a: " + a[key] + ", b: " + b[key]);
			var compA = a[key];
			var	compB = b[key];
			
			if(compA < compB){
				return -1;
			} 
			if(compA > compB){
				return 1;
			} 
			return 0;
		});*/

		this.setState({
			fish: newFish
		});
	}

	render() {
		return (
			<div className="">
	  	  <table className="table">
					<thead>
					<tr>
						<th onClick={() => this.sort('user')}>Fisherman</th>
						<th onClick={() => this.sort('length')}>Length</th>
						<th onClick={() => this.sort('weight')}>Weight</th> 
						<th onClick={() => this.sort('lineLength')}>Line Length</th> 
						<th onClick={() => this.sort('sinkerWeight')}>Sinker Weight</th> 
						<th onClick={() => this.sort('lure')}>Lure</th> 
						<th onClick={() => this.sort('color')}>Lure Color</th> 
					</tr>
					</thead>
					<tbody>
  		    {this.state.fish.map((fishItem) => {
  		      return (
							<tr key={fishItem.id}>
								<td>{fishItem.user}</td>
								<td>{fishItem.length}</td>
  		          <td>{fishItem.weight}</td>
  		          <td>{fishItem.lineLength}</td>
  		          <td>{fishItem.sinkerWeight}</td>
  		          <td>{fishItem.lure}</td>
  		          <td>{fishItem.color}</td>
							</tr>
  		          
  		      )
					})}
					</tbody>
  		  </table>
  		</div>
		);
	}
}

export default FishData;