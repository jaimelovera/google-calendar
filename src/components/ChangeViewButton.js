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
			<select className ="change-view-button"
					onChange={this.changeCurrentView}
					defaultValue={this.props.currentView}>
				<option value="week">Week</option>
				<option value="month">Month</option>
			</select>
		);
	}
}

export default ChangeViewButton