import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBb-Ett3eBfVkVbQF4nHw7UJ2ZSpJOP59A",
  authDomain: "sure-briefing.firebaseapp.com",
  projectId: "sure-briefing",
  storageBucket: "sure-briefing.appspot.com",
  messagingSenderId: "357608968859",
  appId: "1:357608968859:web:28cc63b72e211fdcedac3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
