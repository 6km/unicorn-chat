import React from 'react';
import { auth } from '../../firebase'
import { IoClose } from 'react-icons/io5'

export default function UserInfo (props) {
  return (
    <div className="user_info">
      <img src={props.avatar} alt={props.username}/>
      <div>
        <span className="welcome_message">Hello,</span>
        <span className="username">{props.username}</span>
      </div>
      <button onClick={() => auth.signOut()} title="Logout"><IoClose /></button>
    </div>
  )
}
