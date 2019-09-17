import React from 'react';

import './ProfilePhotoIcon.css';
import profilephoto from '../img/profile-picture.png';

function ProfilePhotoIcon(props) {
	return (
		<img className="profile-photo-icon" src={profilephoto} alt="" />
	);
}

export default ProfilePhotoIcon