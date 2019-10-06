import React from 'react';
import './ProfilePhotoIcon.css';
import profilephoto from '../img/profile-picture.png';

/* This is a dummy profile picture to emulate the look of google calendar. */
function ProfilePhotoIcon(props) {
	return (
		<img className="profile-photo-icon" src={profilephoto} alt="" />
	);
}

export default ProfilePhotoIcon