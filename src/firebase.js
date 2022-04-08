import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { IoCheckmarkCircle } from 'react-icons/io5';

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

function successCallback(user) {
    toast(`Logged in as ${user.displayName}`, {
        theme: "colored",
        type: "success",
        pauseOnHover: false,
        closeButton: false,
        progressStyle: {
            background: "var(--primary-color)"
        },
        style: {
            background: "var(--app-bg)"
        }
    });
}

function failtureCallback(err) {
    let errorMessage = "An error happened while logging you in"

    switch (err.code) {
        case "auth/cancelled-popup-request":
            errorMessage = "Popup has been cancelled due to another conflicting popup being opened"
            break;

        case "auth/popup-closed-by-user":
            errorMessage = "Login has been cancelled by you"
            break;

        default:
            break;
    }

    return toast(errorMessage, {
        theme: "colored",
        pauseOnHover: false,
        closeButton: false,
        type: "error"
    });
}

async function LoginWithTwitter() {
    const twitter_provider = new firebase.auth.TwitterAuthProvider();
    await auth.signInWithPopup(twitter_provider)
        .then(({ user }) => successCallback(user))
        .catch(failtureCallback);
}

async function LoginWithGoogle() {
    const google_provider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(google_provider)
        .then(({ user }) => successCallback(user))
        .catch(failtureCallback);
}

async function LoginWithGithub() {
    const github_provider = new firebase.auth.GithubAuthProvider();
    await auth.signInWithPopup(github_provider)
        .then(({ user }) => successCallback(user))
        .catch(failtureCallback);
}



export {
    auth,
    firebase,
    firestore,
    useAuthState,
    LoginWithTwitter,
    LoginWithGoogle,
    LoginWithGithub
};

