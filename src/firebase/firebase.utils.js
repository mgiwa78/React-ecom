import * as firebase from "firebase/app";
import * as auth from "firebase/auth";
import { getAuth } from "firebase/auth";

console.log(auth);

const config = {
  apiKey: "AIzaSyAHS41gvS7XrqqptSG-63_8o89U7B7ahdo",
  authDomain: "crn-db-app.firebaseapp.com",
  projectId: "crn-db-app",
  storageBucket: "crn-db-app.appspot.com",
  messagingSenderId: "253952777132",
  appId: "1:253952777132:web:69a16c27a7b5f0c5e8b809",
  measurementId: "G-1VYDMRF2T1",
};

const authen = getAuth(firebase.initializeApp(config));

const provider = new auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => {
  auth
    .signInWithPopup(authen, provider)
    .then((re) => {
      console.log(re);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default firebase;
