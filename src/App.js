import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from './firebase.int';

const auth = getAuth(app);
function App() {

  const signWithGoogle = ()=> {
    const singWithGoogleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, singWithGoogleProvider)
    .then((result) => { 
      const user = result.user;
      console.log(user);
    })
    .catch((error) => { 
        console.log(error)
    });
  }
  return (
    <div className="App">
        <button onClick={signWithGoogle}>Sign Google</button>
    </div>
  );
}

export default App;
