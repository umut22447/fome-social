import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/database"

const app = firebase.initializeApp({
    apiKey: "AIzaSyAgMwGPOOZZA4lk2jjWiu5SYYXtE9LyOBo",
    authDomain: "fome-social.firebaseapp.com",
    databaseURL: "https://fome-social.firebaseio.com",
    projectId: "fome-social",
    storageBucket: "fome-social.appspot.com",
    messagingSenderId: "65722409278",
    appId: "1:65722409278:web:a14e888873485eaf190c6f"
});

export const database = firebase.database();

export const writeUserData = (userId, name, email, description) => {
    database.ref('users/' + userId).set({
        username: name,
        email: email,
        description: description
    });
}

export const readUserData = (userId) => {
    return database.ref('users/' + userId).on('value', snapshot => {
        console.log(snapshot.val());
    })
}

export const deleteUserData = (userId) => {
    return database.ref('users/' + userId).remove();
}

export const auth = app.auth();
export default app;