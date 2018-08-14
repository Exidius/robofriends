import React from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';
import Scroll from './Scroll';

class App extends React.Component {
	constructor(){
		super()
		this.state = {
			robots: robots,
			searchField: ''
		}
	}

	onSearchChange = (event) =>{
		this.setState({searchField: event.target.value})
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots:users}))
	}
	render(){
	const filteredRobots = this.state.robots.filter(robots => {
		return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
	})
	return (
		<div className='tc'>
			<h1> RoboFriends</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
			<CardList robots={filteredRobots}/>
			</Scroll>
		</div>
	);
	}
	
}


export default App;