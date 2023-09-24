import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtDpaTfGb6RLTg3SoADGFd3gzp_eqiijM",
  authDomain: "shopping-cart-ecommerce.firebaseapp.com",
  databaseURL: "https://shopping-cart-ecommerce-default-rtdb.firebaseio.com",
  projectId: "shopping-cart-ecommerce",
  storageBucket: "shopping-cart-ecommerce.appspot.com",
  messagingSenderId: "659290168469",
  appId: "1:659290168469:web:2f95b4d9fbe0fecc400f9c",
};

// Initialize Firebase
// App variable connects our projects with firebase services
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const projectId = "shopping-cart-ecommerce";

export const firestoreURL = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents`;
