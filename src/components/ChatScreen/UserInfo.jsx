import React from "react"
import { auth } from "../../firebase"
import { IoClose, IoLogoGithub, IoCode } from "react-icons/io5"
import styled from "styled-components";

var DevBadge = styled.div`
background: rgba(255, 255, 255, 0.2);
margin: 0;
border-radius: 6px;
height: 12px;
width: 12px;
padding: 3px;
display: flex;
align-items: center;
justify-content: center;
`

export default function UserInfo(props) {
    var isDev = props.user.uid === process.env.REACT_APP_DEV_UID;

    return (
        <div className="user_info">
            <img src={props.user.photoURL} alt={props.user.displayName} />
            <div>
                <span className="welcome_message">Hello,</span>
                <span className="username" style={{ display: 'flex', alignItems: "center", gap: 6 }}>
                    {props.user.displayName}
                    {isDev && (
                        <DevBadge>
                            <IoCode />
                        </DevBadge>
                    )}
                </span>
            </div>
            <div className="w-100" />
            <button
                onClick={() => window.open("https://github.com/6km/unicorn-chat")}
                title="Source Code"
                className="github_button"
            >
                <IoLogoGithub />
            </button>
            <button onClick={() => auth.signOut()} title="Logout">
                <IoClose />
            </button>
        </div>
    )
}
