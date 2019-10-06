import React from 'react';

import HamburgerButton from './HamburgerButton';
import CalendarLogo from './CalendarLogo';
import TodayButton from './TodayButton';
import ArrowButtons from './ArrowButtons';
import CurrentMonthYear from './CurrentMonthYear';
import SettingsButton from './SettingsButton';
import ChangeViewButton from './ChangeViewButton';
import ProfilePhotoIcon from './ProfilePhotoIcon';

import './NavBar.css';

function NavBar(props) {
	return (
		<nav className='navbar'>
			<div className ="navbar-spacer-1"></div>
			<div className ="navbar-hamburgerbutton">
				<HamburgerButton />
			</div>
			<div className ="navbar-spacer-2"></div>
			<div className ="navbar-calendarlogo">
				<CalendarLogo />
			</div>
			<div className ="navbar-spacer-3"></div>
			<div className ="navbar-todaybutton">
				<TodayButton currentView={props.currentView}
							 changeDate={props.changeDate}
							 currentYear={props.currentYear}
							 currentMonth={props.currentMonth}
							 currentDay={props.currentDay}
				/>
			</div>
			<div className ="navbar-spacer-4"></div>
			<div className ="navbar-arrowbuttons">
				<ArrowButtons currentView={props.currentView}
							  changeDate={props.changeDate}
							  currentYear={props.currentYear}
							  currentMonth={props.currentMonth}
							  currentDay={props.currentDay}
				/>
			</div>
			<div className ="navbar-spacer-5"></div>
			<div className ="navbar-currentmonthyear">
				<CurrentMonthYear currentView={props.currentView}
								  currentYear={props.currentYear}
								  currentMonth={props.currentMonth}
								  currentDay={props.currentDay}
				/>
			</div>
			<div className ="navbar-spacer-6"></div>
			<div className ="navbar-settingsbutton">
				<SettingsButton />
			</div>
			<div className ="navbar-spacer-7"></div>
			<div className ="navbar-changeviewbutton">
				<ChangeViewButton currentView={props.currentView} 
								  changeCurrentView={props.changeCurrentView} />
			</div>
			<div className ="navbar-spacer-8"></div>
			<div className ="navbar-profilephotoicon">
				<ProfilePhotoIcon />
			</div>
			<div className ="navbar-spacer-9"></div>
		</nav>
	);
}

export default NavBar;