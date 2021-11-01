import React, { useState } from 'react';
import { auth, firestore } from "../../../firebase";
import ChatInput from "./ChatInput";
import Messages from "./Messages";
import UserInfo from "./UserInfo.jsx";
import { serverTimestamp } from '@firebase/firestore';

export default function ChatScreen ({ user }) {
  const [content, setContent] = useState('');

  const onChangeHandler = (e) => {
    setContent(e.target.value);
  }

  const SendMessage = (e) => {
    e.preventDefault();

    if (content.trim().length >= 1) {
      firestore.collection("messages").add({
        uid: auth.currentUser.uid,
        avatar: auth.currentUser.photoURL,
        content,
        createdAt: serverTimestamp()
      })

      setContent('');
    }
  }

  return (
    <>
      <UserInfo username={user.displayName} avatar={user.photoURL} />
      <Messages />
      <form className="chat-form" onSubmit={SendMessage}>
        <ChatInput autoFocus placeholder="Send a message now" value={content} onChange={onChangeHandler} />
      </form>
    </>
  )
}
