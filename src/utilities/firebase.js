import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

import { useAuthState } from 'react-firebase-hooks/auth'

firebase.initializeApp({
    // your app config
})

const auth = firebase.auth();
const firestore = firebase.firestore();

const LoginWithTwitter = async () => {
    const twitter_provider = new firebase.auth.TwitterAuthProvider();
    await auth.signInWithPopup(twitter_provider)
        .then(({ user }) => {
            console.log(`Logged in successfully to ${user.displayName}!`);
        })

        .catch(() => {
            return console.log('Login failed.');
        })
}

const LoginWithGoogle = async () => {
    const google_provider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(google_provider)
        .then(({ user }) => {
            console.log(`Logged in successfully to ${user.displayName}!`);
        })

        .catch(() => {
            return console.log('Login failed.');
        })
}



export {
    auth,
    firebase,
    firestore,
    useAuthState,
    LoginWithTwitter,
    LoginWithGoogle,
}