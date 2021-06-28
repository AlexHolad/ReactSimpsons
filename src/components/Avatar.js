import React from "react";
import "./Avatar.css";


function Avatar(props) {
  return (
    <div className='AvatarCard'>
      <img src={props.src} className='avatar' alt='avatarImg'></img>
      <div>
        <h3 className='name'>{props.name}</h3>
      </div>
    </div>
  )
}


export default Avatar