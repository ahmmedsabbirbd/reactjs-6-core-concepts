import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0KhaWvmFzSlGBrTHn-AxnZdp3vBEMkco",
  authDomain: "fir-with-go-fb-ma-gb.firebaseapp.com",
  projectId: "fir-with-go-fb-ma-gb",
  storageBucket: "fir-with-go-fb-ma-gb.appspot.com",
  messagingSenderId: "1025194493666",
  appId: "1:1025194493666:web:7a32de592d77ae046500bb"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;