import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAdGWHcz3oBvmAoUhCGeCskj1M4VrjDHIg",
  authDomain: "simple-firebase-auth-b0c43.firebaseapp.com",
  databaseURL: "https://simple-firebase-auth-b0c43-default-rtdb.firebaseio.com",
  projectId: "simple-firebase-auth-b0c43",
  storageBucket: "simple-firebase-auth-b0c43.appspot.com",
  messagingSenderId: "603958721258",
  appId: "1:603958721258:web:744095e8775e00b247b593"
};
const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);

export default firebaseApp;
