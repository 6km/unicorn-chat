import { auth, useAuthState } from "../../utilities/firebase";
import LoginScreen from "./LoginScreen";
import ChatScreen from "./ChatScreen/index";

export default function () {
  const [user] = useAuthState(auth);

  return (
    <div className={`container ${user && 'in_app'}`}>
      {
        user ? <ChatScreen user={user} /> : <LoginScreen />
      }
    </div>
  )

}