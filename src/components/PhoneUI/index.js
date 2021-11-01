import ChatScreen from "./ChatScreen/index";
import React from 'react';
import { auth, useAuthState } from "../../firebase";
import LoginScreen from "./LoginScreen";

export default function PhoneUI () {
  const [user] = useAuthState(auth);

  return (
    <div className={`container ${user && 'in_app'}`}>
      {
        user ? <ChatScreen user={user} /> : <LoginScreen />
      }
    </div>
  )

}
