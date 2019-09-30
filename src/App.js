import React from 'react';

import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Calendar from './components/Calendar';


class App extends React.Component {
	constructor(props) {
		super(props)
		let todaysDate = new Date();
		/* This will take the current date and return the date of the sunday of that week (the beggining of the week) */
		todaysDate.setDate(todaysDate.getDate() - todaysDate.getDay());
		this.state = {
			currentView: "week",
			year:  todaysDate.getFullYear(),
			month: todaysDate.getMonth(),
			day:   todaysDate.getDate()
		}
		this.changeCurrentView = this.changeCurrentView.bind(this);
		this.changeDate = this.changeDate.bind(this);
	}

	changeCurrentView(option) {
		if (option === "week") {
			/* Returns the date back to the first date of that week its currently in (since monthly view converts it to the first day of the month) */
			let currentDate = new Date(this.state.year,this.state.month,this.state.day);
			currentDate.setDate(currentDate.getDate() - currentDate.getDay());
			this.setState({currentView: "week",
						   year:  currentDate.getFullYear(),
						   month: currentDate.getMonth(),
						   day:   currentDate.getDate()}
			);
		}
		if (option === "month") {
			this.setState({currentView: "month"});
		}
	}

	changeDate(year,month,day) {
		this.setState({year: year, month: month, day: day});
	}

	render() {
		return (
		  	<div>
				<NavBar currentView = {this.state.currentView}
						currentYear = {this.state.year}
						currentMonth = {this.state.month}
						currentDay = {this.state.day}
						changeCurrentView = {this.changeCurrentView}
						changeDate = {this.changeDate}
				/>
				<SideBar />
				<Calendar currentView = {this.state.currentView}
						  year = {this.state.year}
						  month = {this.state.month}
						  day = {this.state.day}
				/>
		  	</div>
		);
	}
}

export default App;
