import React from "react"
import { IoRemove } from "react-icons/io5"
import { auth, firestore } from "../../firebase"

export default function MessageBody(props) {
    var authorImageRef = React.createRef();
    var isCurrentUserDev = auth.currentUser.uid === process.env.REACT_APP_DEV_UID;

    const deleteMessage = () => {
        firestore.collection("messages").doc(props.id).delete()
    }

    const onImageNotFound = () => {
        authorImageRef.current.src = "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010"
    }

    return (
        <div className={`msg ${props.isCurrent ? "is_current" : ""}`}>
            <div className="author_avatar">
                {props.isCurrent || <img src={props.avatar} alt={props.username} ref={authorImageRef} onError={onImageNotFound} />}
            </div>
            <span>{props.content}</span>
            {isCurrentUserDev && (
                <button className="delete_msg_button" onClick={deleteMessage}>
                    <IoRemove />
                </button>
            )}
        </div>
    )
}
