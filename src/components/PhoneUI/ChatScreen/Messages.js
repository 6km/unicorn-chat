import React from 'react';
import { auth, firestore } from "../../../firebase";
import { useCollectionData } from 'react-firebase-hooks/firestore'
import MessageBody from "./MessageBody";

export default function Messages () {
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);
  const [data] = useCollectionData(query, { idField: 'id' });

  return (
    <div className="messages_container">
      {
        data

        ? data.map((msg) => {
          return <MessageBody id={msg.id} avatar={msg.avatar} content={msg.content} isCurrent={msg.uid === auth.currentUser.uid} key={msg.id}/>
        })

        : 'Loading...'
      }
    </div>
  )
}
