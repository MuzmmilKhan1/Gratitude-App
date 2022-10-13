import { React } from 'react'
import {  GoogleAuthProvider,  getAuth,  signInWithPopup,  signInWithEmailAndPassword,  createUserWithEmailAndPassword,
     sendPasswordResetEmail, updateProfile ,  signOut, updateCurrentUser} from "firebase/auth";
import {  getFirestore,  query,  getDocs,  collection, where, addDoc } from 'firebase/firestore'
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyCRcFekpgguotLqN6acFLnu6HOVuupdNFM",
  authDomain: "gratitude-app-e1ca6.firebaseapp.com",
  projectId: "gratitude-app-e1ca6",
  storageBucket: "gratitude-app-e1ca6.appspot.com",
  messagingSenderId: "109285057949",
  appId: "1:109285057949:web:579062c81f37ecbfd13b74",
  measurementId: "G-1SR32YWTG6"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      .then( async (res)=>{
        await updateProfile( auth.currentUser ,{displayName: name})
      }).catch((err)=>{console.log(err)})
      // await updateProfile(auth.currentUser , {displayName: name})
      // await addDoc(collection(db, "users"), {
      //   uid: user.uid,
      //   name: name,
      //   authProvider: "local",
      //   email,
      // });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent to your email!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const logout = () => {
    signOut(auth);
  };

  export {
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
  };

