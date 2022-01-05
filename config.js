import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyARQgteaF5HciYUXn-gR6CZxyC7X52oKi4",
  authDomain: "ratlam-jewellers.firebaseapp.com",
  projectId: "ratlam-jewellers",
  storageBucket: "ratlam-jewellers.appspot.com",
  messagingSenderId: "610421955384",
  appId: "1:610421955384:web:ea332e1c665e2c72d4ffcd"
};

firebase.initializeApp(firebaseConfig);
export default firebase.firestore();