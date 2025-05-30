import React, { useContext } from 'react'; 
import ProfileContext from '../../../../../../Context';
import styles from "./ProfilePreview.module.css"

const ProfilePreview = () => {
  // Context Management
  const { data } = useContext(ProfileContext);
  const { userName, userPhotoUrl } = data || {};

  if (!userName || !userPhotoUrl) {
    // If user data is not available yet, return a loading indicator or null
    return "Loading...";
  }

  return (
    <div id={styles.container}>
      <img style={{height:"50px",width:"50px",borderRadius:"50%",}} src={userPhotoUrl} alt="User Avatar"></img>
      <div style={{ height: '50px', width: '150px',lineHeight:"50px", textAlign: 'center',overflow:"hidden",fontWeight:"bold"}}>Hey, {userName}!</div>
    </div>
  );
}

export default ProfilePreview;
