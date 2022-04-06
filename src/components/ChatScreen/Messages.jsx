import React, { useEffect } from "react"
import { useCollectionData } from "react-firebase-hooks/firestore"
import { auth, firestore } from "../../firebase"
import MessageBody from "./MessageBody"

export default function Messages() {
    const messagesRef = firestore.collection("messages")
    const query = messagesRef.orderBy("createdAt", "asc").limit(50)
    const [data] = useCollectionData(query, { idField: "id" }) || null

    const lastElementRef = React.createRef();

    useEffect(() => {
        lastElementRef.current.scrollIntoView(false);
    }, [lastElementRef, data])

    return (
        <div className="messages_container">
            {data &&
                data.map((msg) => {
                    return (
                        <MessageBody
                            id={msg.id}
                            avatar={msg.avatar}
                            content={msg.content}
                            isCurrent={msg.uid === auth.currentUser.uid}
                            uid = {msg.uid}
                            key={msg.id}
                        />
                    )
                })
            }
            <div id="scroll_to_this_div" ref={lastElementRef}></div>
        </div>
    )
}
