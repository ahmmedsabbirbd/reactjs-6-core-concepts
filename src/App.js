import './App.css';
import {  GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from './firebase.int';

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

  const signWithGithub = ()=> {
    const singWithGithubProvider = new GithubAuthProvider();
    signInWithPopup(auth, singWithGithubProvider)
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
        <button onClick={signWithGithub}>Sign github</button>
    </div>
  );
}

export default App;
