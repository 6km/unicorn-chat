import { useState } from "react";
import { auth, firestore, SendMessage } from "../../../utilities/firebase";
import { ButtonPrimary } from "../../Buttons";
import ChatInput from "./ChatInput";
import Messages from "./Messages";
import UserInfo from "./UserInfo.jsx";
import { serverTimestamp } from '@firebase/firestore';

export default function ({ user }) {
  const [content, setContent] = useState('');

  const onChangeHandler = (e) => {
    setContent(e.target.value)
  }

  const SendMessage = (e) => {
    e.preventDefault();
    
    firestore.collection("messages").add({
      uid: auth.currentUser.uid,
      avatar: auth.currentUser.photoURL,
      content,
      createdAt: serverTimestamp()
    })
    
    setContent('');
  }

  console.log(user.photoURL);

  return (
    <>
      <UserInfo username={user.displayName} avatar={user.photoURL} />
      <Messages />
      <form onSubmit={SendMessage.bind(this)}>
        <ChatInput placeholder="Send a message now" value={content} autoFocus={true} onChange={onChangeHandler.bind(this)}></ChatInput>
      </form>
    </>
  )
}