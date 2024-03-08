import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCIsJxK7pMXi9P7AwlUT43oOhQeWNcfQ_4",
  authDomain: "healthstyle-01.firebaseapp.com",
  projectId: "healthstyle-01",
  storageBucket: "healthstyle-01.appspot.com",
  messagingSenderId: "242700551251",
  appId: "1:242700551251:web:190830c361c07bfff372a6"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth };
export { db };