import React from 'react';
import './ArrowButtons.css';

class ArrowButtons extends React.Component {
	constructor(props) {
		super(props)
		/* Binding these functions since I am passing them down as props. */
		this.handlePreviousClick = this.handlePreviousClick.bind(this);
		this.handleNextClick = this.handleNextClick.bind(this);
	}

	handlePreviousClick() {
		if(this.props.currentView === "week"){
			let date = new Date(this.props.currentYear,this.props.currentMonth,this.props.currentDay);
			/* Moves the date 7 days back, aka a week back. */
			date.setDate(date.getDate() - 7);
			this.props.changeDate(date.getFullYear(),date.getMonth(),date.getDate());
		}
		if(this.props.currentView === "month"){
			let date = new Date(this.props.currentYear,this.props.currentMonth,1);
			/* Moves the date a month back and the the first of that month. */
			date.setMonth(date.getMonth() - 1);
			this.props.changeDate(date.getFullYear(),date.getMonth(),date.getDate());
		}
	}

	handleNextClick() {
		if(this.props.currentView === "week"){
			let date = new Date(this.props.currentYear,this.props.currentMonth,this.props.currentDay);
			/* Moves the date 7 days forward, aka a week forward. */
			date.setDate(date.getDate() + 7);
			this.props.changeDate(date.getFullYear(),date.getMonth(),date.getDate());
		}
		if(this.props.currentView === "month"){
			let date = new Date(this.props.currentYear,this.props.currentMonth,1);
			/* Moves the date a month forward and the the first of that month. */
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