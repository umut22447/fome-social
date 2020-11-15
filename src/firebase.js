import firebase from 'firebase/app'
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyAgMwGPOOZZA4lk2jjWiu5SYYXtE9LyOBo",
    authDomain: "fome-social.firebaseapp.com",
    databaseURL: "https://fome-social.firebaseio.com",
    projectId: "fome-social",
    storageBucket: "fome-social.appspot.com",
    messagingSenderId: "65722409278",
    appId: "1:65722409278:web:a14e888873485eaf190c6f"
});

export const auth = app.auth();
export default app;