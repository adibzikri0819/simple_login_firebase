
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBLddg6oA7Bx5lVmdH3w_YIXQxapFFD6DM",
  authDomain: "auth-development-d3917.firebaseapp.com",
  databaseUrl: "",
  projectId: "auth-development-d3917",
  storageBucket: "auth-development-d3917.appspot.com",
  messagingSenderId: "62370993381",
  appId: "1:62370993381:web:95ee86327c00cb098a300c"
  };

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

export default app