import React from 'react';

import './ArrowButtons.css';

class ArrowButtons extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
		this.handlePreviousClick = this.handlePreviousClick.bind(this);
		this.handleNextClick = this.handleNextClick.bind(this);
	}

	handlePreviousClick() {
		if(this.props.currentView === "week"){
			let date = new Date(this.props.currentYear,this.props.currentMonth,this.props.currentDay);
			date.setDate(date.getDate() - 7);
			this.props.changeDate(date.getFullYear(),date.getMonth(),date.getDate());
		}
		if(this.props.currentView === "month"){
			let date = new Date(this.props.currentYear,this.props.currentMonth,1);
			date.setMonth(date.getMonth() - 1);
			this.props.changeDate(date.getFullYear(),date.getMonth(),date.getDate());
		}
	}

	handleNextClick() {
		if(this.props.currentView === "week"){
			let date = new Date(this.props.currentYear,this.props.currentMonth,this.props.currentDay);
			date.setDate(date.getDate() + 7);
			this.props.changeDate(date.getFullYear(),date.getMonth(),date.getDate());
		}
		if(this.props.currentView === "month"){
			let date = new Date(this.props.currentYear,this.props.currentMonth,1);
			date.setMonth(date.getMonth() + 1);
			this.props.changeDate(date.getFullYear(),date.getMonth(),date.getDate());
		}
	}


	render() {
		return (
			<div className="arrow-buttons">
				<button className="arrow-button" 
						onClick={this.handlePreviousClick}>
					&lt;
				</button>
				<button className="arrow-button"
						onClick={this.handleNextClick}>
					&gt;
				</button>
			</div>
		);
	}
}

export default ArrowButtons