import React from "react";
import { IoClose, IoCode, IoLogoGithub } from "react-icons/io5";
import styled from "styled-components";
import { auth } from "../../firebase";

const DevBadge = styled.div`
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

export default function UserInfo({ user: author }) {
    const isDev = user.uid === process.env.REACT_APP_DEV_UID;

    return (
        <div className="user_info">
            <img src={author.photoURL} alt={author.displayName} />
            <div>
                <span className="welcome_message">Hello,</span>
                <span className="username" style={{ display: 'flex', alignItems: "center", gap: 6 }}>
                    {author.displayName}
                    {isDev && (
                        <DevBadge>
                            <IoCode />
                        </DevBadge>
                    )}
                </span>
            </div>
            <div className="w-100" />
            <button
                type="button"
                title="Source Code"
                className="github_button"
                onClick={() => window.open("https://github.com/6km/unicorn-chat")}
            >
                <IoLogoGithub />
            </button>
            <button title="Logout" type="button" onClick={() => auth.signOut()} >
                <IoClose />
            </button>
        </div>
    )
}
