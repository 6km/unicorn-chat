import './App.css';
import React, {useEffect, useState} from 'react';
import { auth, useAuthState } from "./firebase";
import ChatScreen from "./components/ChatScreen";
import LoginScreen from "./components/LoginScreen";
import Loading from "./components/Loading";

function App() {
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      if (typeof user === 'object') {
        setLoading(false);
      }
    }, 740);

  })

  return (
    <div className="App">
      <div className={`container ${(!loading && user) && 'in_app'}`}>
        {
          loading && <Loading />
        }
        {
          !loading && (user ? <ChatScreen user={user} /> : <LoginScreen />)
        }
      </div>
    </div>
  )
}

export default App;
