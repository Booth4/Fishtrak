import React, { Component } from 'react';
import firebase from './firebase.js';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
			this.state = {
				length: '',
				weight: '',
				lineLength: '',
				sinkerWeight: '',
				lure: '',
				color: '',
				date: ''
			};
		
			this.handleChange = this.handleChange.bind(this);
			this.handleSubmit = this.handleSubmit.bind(this);
			this.reset = this.reset.bind(this);
		}

		handleChange(event) {
			const target = event.target;
			const name = target.name;

			this.setState({[name]: target.value});
		}

		handleSubmit(event){
			event.preventDefault();
			const itemsRef = firebase.database().ref('fish');
			const fish = {
				length: this.state.length,
				weight: this.state.weight,
				lineLength: this.state.lineLength,
				sinkerWeight: this.state.sinkerWeight,
				lure: this.state.lure,
				color: this.state.color,
				date: this.state.date
			}
			itemsRef.push(fish);
		}

		reset(){
			this.setState({						
				length: '',
				weight: '',
				lineLength: '',
				sinkerWeight: '',
				lure: '',
				color: ''});
		}
	
	render() {
    return (
			<form onSubmit={this.handleSubmit}>
			<div className="form-group">
				<label for="length">Fish Length(in):</label>
				<input id="length" className="form-control" name="length" type="number" value={this.state.length} onChange={this.handleChange} />
			</div>
			<div className="form-group">
				<label for="weight">Fish Weight(lb):</label>
				<input id="weight" className="form-control" name="weight" type="number" value={this.state.weight} onChange={this.handleChange} />
			</div>
			<div className="form-group">
				<label for="lineLength">Line Length(ft):</label>
					<input id="lineLength" className="form-control" name="lineLength" type="number" value={this.state.lineLength} onChange={this.handleChange} />
			</div>
			<div className="form-group">
				<label for="sinkerWeight">Sinker Weight(oz):</label>
					<input id="sinkerWeight" className="form-control" name="sinkerWeight" type="number" value={this.state.sinkerWeight} onChange={this.handleChange} />
			</div>
			<div className="form-group">
				<label for="lure">Lure Type:</label>
					<input id="lure" className="form-control" name="lure" type="text" value={this.state.lure} onChange={this.handleChange} />
			</div>
			<div className="form-group">
				<label for="color">Lure Color:</label>
					<input id="color" className="form-control" name="color" type="text" value={this.state.color} onChange={this.handleChange} />
			</div>
			<div className="form-group">
				<label for="date">Date:</label>
					<input id="date" className="form-control" name="date" type="date" value={this.state.date} onChange={this.handleChange} />
			</div>
			<div className="form-group">
				<input type="submit" value="Submit"/>
				<input type="button" value="Reset" onClick={this.reset}/>
			</div>
		</form>
    );
  }
}
export default App;