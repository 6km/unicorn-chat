import { auth, useAuthState } from "../../firebase";
import LoginScreen from "./LoginScreen";
import ChatScreen from "./ChatScreen/index";

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
