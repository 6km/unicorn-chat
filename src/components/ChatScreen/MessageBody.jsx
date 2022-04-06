import React from "react";
import { IoRemove } from "react-icons/io5";
import { auth, firestore } from "../../firebase";

export default function MessageBody({ id, avatar, username, content, isCurrent }) {
    let authorImageRef = React.createRef();
    const isCurrentUserDev = auth.currentUser.uid === process.env.REACT_APP_DEV_UID;

    const deleteMessage = () => {
        firestore.collection("messages").doc(id).delete()
    }

    const onImageNotFound = () => {
        authorImageRef.current.src = "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010"
    }

    return (
        <div className={`msg ${isCurrent ? "is_current" : ""}`}>
            <div className="author_avatar">
                {isCurrent || <img src={avatar} alt={username} ref={authorImageRef} onError={onImageNotFound} />}
            </div>
            <span>{content}</span>
            {isCurrentUserDev && (
                <button className="delete_msg_button" type="button" onClick={deleteMessage}>
                    <IoRemove />
                </button>
            )}
        </div>
    )
}
