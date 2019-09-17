import React from 'react';

class Calendar extends React.Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}

	render() {
		return (
			<h1>Hello from Calendar. {this.props.currentView}</h1>
		);
	}
}

export default Calendar;