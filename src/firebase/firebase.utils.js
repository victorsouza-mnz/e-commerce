import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyBz_9uzdbkAbX9K-f8WZWTeBw-mJSL4ESE",
    authDomain: "e-commerce-db-d6455.firebaseapp.com",
    projectId: "e-commerce-db-d6455",
    storageBucket: "e-commerce-db-d6455.appspot.com",
    messagingSenderId: "1078303747150",
    appId: "1:1078303747150:web:b39e5f0b1c1bd95870a71f",
    measurementId: "G-TQ781XG809"
};


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch (error) {
            console.log (error.message)
        }
    }

    return userRef
}


firebase.initializeApp(config)


export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;