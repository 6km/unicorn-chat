import { serverTimestamp } from "firebase/firestore"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { IoSend } from "react-icons/io5"
import { auth, firestore } from "../../firebase"
import ChatInput from "./ChatInput"
import Messages from "./Messages.jsx"
import UserInfo from "./UserInfo.jsx"

function ChatScreen({ user }) {
    const [content, setContent] = useState("")

    function onInputChangeHandler(e) {
        setContent(e.target.value)
    }

    function SendMessage(e) {
        e.preventDefault()

        if (content.trim().length >= 1) {
            firestore.collection("messages").add({
                uid: auth.currentUser.uid,
                avatar: auth.currentUser.photoURL,
                content,
                createdAt: serverTimestamp(),
            }).then(() => {
                setContent("")
            })
        }
    }

    return (
        <>
            <UserInfo {...{ user }} />
            <Messages />
            <form className="chat-form" onSubmit={SendMessage}>
                <ChatInput
                    autoFocus
                    placeholder="Send a message now"
                    value={content}
                    onChange={onInputChangeHandler}
                />
                <button type="submit" className="send_button">
                    <IoSend />
                </button>
            </form>
        </>
    )
}

ChatScreen.propTypes = {
    user: PropTypes.object.isRequired
}

export default ChatScreen;