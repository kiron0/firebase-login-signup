import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAWq3WVYQHnnKLIb7k_nikruDD_-9orFXw",
  authDomain: "fir-login-signup-af6f0.firebaseapp.com",
  projectId: "fir-login-signup-af6f0",
  storageBucket: "fir-login-signup-af6f0.appspot.com",
  messagingSenderId: "887689613534",
  appId: "1:887689613534:web:f91ef62a9dbacbae5f724f"
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);

export default firebaseApp;
