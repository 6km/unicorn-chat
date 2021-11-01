import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

import { useAuthState } from 'react-firebase-hooks/auth'

firebase.initializeApp({
    // your app config
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
});

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

const LoginWithGithub = async () => {
    const github_provider = new firebase.auth.GithubAuthProvider();
    await auth.signInWithPopup(github_provider)
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
    LoginWithGithub
}
