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
					<tbody>
					<tr>
						<th>Fisherman</th>
						<th>Length</th>
						<th>Weight</th>
					</tr>
  		    {this.state.fish.map((fishItem) => {
  		      return (
							<tr key={fishItem.id}>
								<td>{fishItem.user}</td>
								<td>{fishItem.length}</td>
  		          <td>{fishItem.weight}</td>
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