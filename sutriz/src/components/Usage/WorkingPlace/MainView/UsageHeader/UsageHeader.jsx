import React from 'react'
import ProfilePreview from './ProfilePreview/ProfilePreview';
import Logout from './Logout/Logout';
import styles from "./UsageHeader.module.css"

const UsageHeader = () => {
  return (
    <div id={styles.container}>
        <ProfilePreview/>
        <Logout/>
    </div>
  )
}

export default UsageHeader;