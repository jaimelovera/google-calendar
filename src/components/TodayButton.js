import React from 'react';

import './TodayButton.css';

class TodayButton extends React.Component  {
	constructor(props) {
		super(props)
		this.state = {}
		this.handleTodayClick = this.handleTodayClick.bind(this);
	}

	handleTodayClick() {
		if(this.props.currentView === "week"){
			let date = new Date();
			date.setDate(date.getDate() - date.getDay());
			this.props.changeDate(date.getFullYear(),date.getMonth(),date.getDate());
		}
		if(this.props.currentView === "month"){
			let date = new Date();
			date.setDate(1);
			this.props.changeDate(date.getFullYear(),date.getMonth(),date.getDate());
		}
	}

	render () {
		return (
			<button className="today-button"
					onClick={this.handleTodayClick}>
				Today
			</button>
		);
	}
}

export default TodayButton