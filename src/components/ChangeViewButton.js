import React from 'react';

class ChangeViewButton extends React.Component {
	/* Simple dropdown selector.
	   TODO: Add more style to this. */

	constructor(props) {
		super(props)
		this.changeCurrentView = this.changeCurrentView.bind(this);
	}

	changeCurrentView(event) {
		this.props.changeCurrentView(event.target.value);
	}

	render() {
		return (
			<select className ="change-view-button" onChange={this.changeCurrentView}>
				<option value="week" selected={this.props.currentView === "week" ? "selected" : ""}>Week</option>
				<option value="month" selected={this.props.currentView === "month" ? "selected" : ""}>Month</option>
			</select>
		);
	}
}

export default ChangeViewButton