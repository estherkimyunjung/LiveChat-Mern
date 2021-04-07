import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDdPA_OVk8WHkE5Oe3c4bmsaMCcriHBeEY",
  authDomain: "livechat-mern.firebaseapp.com",
  projectId: "livechat-mern",
  storageBucket: "livechat-mern.appspot.com",
  messagingSenderId: "466602922042",
  appId: "1:466602922042:web:7d47439f51ea20f7016503",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
