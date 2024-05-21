import React from 'react'
import ProfilePreview from './ProfilePreview/ProfilePreview';
import Logout from './Logout/Logout';

const UsageHeader = () => {
  return (
    <div style={{width:"100%",height:"15%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <ProfilePreview/>
        <Logout/>

    </div>
  )
}

export default UsageHeader;