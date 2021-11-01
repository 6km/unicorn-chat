import React from 'react';
import { auth, firestore } from "../../../firebase";
import { IoClose } from 'react-icons/io5'

export default function MessageBody (props) {
  const deleteMessage = () => {
    firestore.collection("messages").doc(props.id).delete();
  }

  return (
    <div role="presentation" className={`msg ${props.isCurrent ? 'is_current' : ""}`}>
      {props.isCurrent || <img src={props.avatar} alt={props.username} />}
      <span>{props.content}</span>
      {
        auth.currentUser.uid === process.env.REACT_APP_DEV_UID
        &&
        <button
          className="delete_msg_button"
          onClick={deleteMessage}>
          <IoClose />
        </button>
      }
    </div>
  )
}
