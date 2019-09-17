import React from 'react';

import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Calendar from './components/Calendar';


class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			currentView: "week"
		}
		this.changeCurrentView = this.changeCurrentView.bind(this);
	}

	changeCurrentView(option) {
		if (option === "week") {
			this.setState({currentView: "week"});
		}
		if (option === "month") {
			this.setState({currentView: "month"});
		}
	}

	render() {
		return (
		  	<div>
				<NavBar currentView={this.state.currentView} changeCurrentView={this.changeCurrentView} />
				<SideBar />
				<Calendar currentView={this.state.currentView}/>
		  	</div>
		);
	}
}

export default App;
