import React, { useState, Suspense } from 'react';
import ChatInput from "./ChatInput";
import Messages from "./Messages";
import UserInfo from "./UserInfo.jsx";
import { auth, firestore } from "../../firebase";
import { serverTimestamp } from '@firebase/firestore';
import { IoSend } from 'react-icons/io5'

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
    <Suspense fallback={<h1>loading (chat screen)</h1>}>
      <UserInfo username={user.displayName} avatar={user.photoURL} />
      <Messages />
      <form className="chat-form" onSubmit={SendMessage}>
        <ChatInput autoFocus placeholder="Send a message now" value={content} onChange={onChangeHandler} />
        <button type="submit" className="send_button"><IoSend /></button>
      </form>
    </Suspense>
  )
}
