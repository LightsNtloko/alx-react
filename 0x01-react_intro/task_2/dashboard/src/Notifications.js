import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';


function Notifications() {
  return (
    <div className="Notifications">
      <button
	style={{
	  position: 'absolute',
	  top: '2px',
	  right: '2px',
	  background: 'none',
	  border: 'none',
	  cursor: 'pointer',
	  fontSize: '15px',
	  fontWeight: 'bold',
	  color: '#3a3a3a',
	}}
	arial-label="Close"
	onClick={console.log("Close button has been clicked")}
      >
	<img src={closeIcon} alt="closeIcon" width="10px" />
      </button>
      <p>Here is the list of Notifications</p>
      <ul>
	<li data="default">New course available</li>
	<li data="urgent">New resume available</li>
	<li data="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  );
}

export default Notifications;
