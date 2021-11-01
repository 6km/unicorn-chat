import React from 'react';
import { auth } from '../../../firebase'
import { IoPersonRemove } from 'react-icons/io5'

export default function UserInfo (props) {
  return (
    <div className="user_info">
      <img src={props.avatar} alt={props.username}/>
      <span>{props.username}</span>
      <button onClick={() => auth.signOut()} title="Logout"><IoPersonRemove /></button>
    </div>
  )
}
