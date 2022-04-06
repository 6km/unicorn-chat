import React, { useEffect, useState } from 'react';
import './App.css';
import ChatScreen from "./components/ChatScreen";
import Loading from "./components/Loading";
import LoginScreen from "./components/LoginScreen";
import { auth, useAuthState } from "./firebase";

function App() {
    const [user] = useAuthState(auth);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            if (typeof user === 'object') {
                setLoading(false);
            }
        }, 250);
    }, [user])

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
