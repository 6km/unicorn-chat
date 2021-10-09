import { auth, firestore } from "../../../utilities/firebase";
import { useEffect, useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore'
import MessageBody from "./MessageBody";

export default function () {
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);
  const [data] = useCollectionData(query, { idField: 'id' });

  return (
    <div className="messages_container">
        {data

          ?

          data.map((msg) => {
            return <MessageBody id={msg.id} avatar={msg.avatar} content={msg.content} isCurrent={msg.uid == auth.currentUser.uid}/>
          })

          : 'Loading...'

        }
    </div>
  )
}