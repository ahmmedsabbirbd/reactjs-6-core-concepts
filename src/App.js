import './App.css';
import {  createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from './firebase.int';
import { useEffect, useState } from 'react';
import Dashboard from './component/Dashboard';
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import RequireAuth from './RequireAuth';
import Login from './component/Login/Login';

function App() {
    const [user, setUser] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';

    // signWithGoogle
  const signWithGoogle = ()=> {
    const singWithGoogleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, singWithGoogleProvider)
    .then((result) => { 
      const user = result.user;
      console.log(user);
      setUser(user);

      navigate(from, {replace: true})
    })
    .catch((error) => { 
        console.log(error)
    });
  }

//   signWithGithub
  const signWithGithub = ()=> {
    const singWithGithubProvider = new GithubAuthProvider();
    signInWithPopup(auth, singWithGithubProvider)
    .then((result) => { 
      const user = result.user;
      console.log(user);
      setUser(user);
      navigate(from, {replace: true})
    })
    .catch((error) => { 
        console.log(error)
    });
  }

  useEffect( ()=> {
    //   onAuthStateChanged
    onAuthStateChanged(auth, user => {
          console.log(user);
          setUser(user);
      })
    },[user])
      
// logout
    const logout = ()=> {
        signOut(auth).then(() => {
            console.log('logout')
        }).catch((error) => {
            console.log(error)
        });
    }

    /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    // create accout email
    const createAccountWithEmailPassword = (e)=> {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => { 
            updateProfile(auth.currentUser, {
              displayName: name
            })
            .then(() => {
                console.log('succes added name');
                const user = result.user;
                console.log(user);
                setUser(user);
                navigate(from, {replace: true})

            })
            .catch((error) => {
                console.log(error);
            });
            
            sendEmailVerification(auth.currentUser).then(() => {
                console.log('send verify sms');
            })
            
        })
          .catch((error) => { 
              console.log(error)
            })
        }
    
        // login accout
        const loginAccountWithEmailPassword = (e)=> {
            e.preventDefault()
                
            signInWithEmailAndPassword(auth, email, password)
            .then((result) => { 
                const user = result.user;
                console.log(user);
                setUser(user);
                navigate(from, {replace: true})

            })
            .catch((error) => { 
                console.log(error)
            })
        }

        const passwordForget = (e)=> {
            e.preventDefault();

            sendPasswordResetEmail(auth, email).then(() => {
                 console.log('password reset succes')
              })
              .catch((error) => {
                console.log(error);                
              });
        }

  return (
    <div className="App">
        <Link to='/dashboard'>DashBord</Link>
        {
            user ?
            <button onClick={logout}>Logout</button>
            :
            <>
                <button onClick={signWithGoogle}>Sign Google</button>
                <button onClick={signWithGithub}>Sign github</button>

                <h2>create account</h2>
                <form onSubmit={createAccountWithEmailPassword}>
                    <input type="text" onChange={e => setName(e.target.value)} required placeholder='name'/>
                    <input type="email" onChange={e => setEmail(e.target.value)} required placeholder='email'/>
                    <input type="password" onChange={e => setPassword(e.target.value)} required placeholder='password' />
                    <input type="submit" value='Submit'  />
                </form>

                <h2>login account</h2>
                <form onSubmit={loginAccountWithEmailPassword}>
                    <input type="email" onChange={e => setEmail(e.target.value)} required placeholder='email'/>
                    <input type="password" onChange={e => setPassword(e.target.value)} required placeholder='password' />
                    <input type="submit" value='Submit'  />
                </form>
                
                <h2>Passwor forget</h2>
                <form onSubmit={passwordForget}>
                    <input type="email" onChange={e => setEmail(e.target.value)} required placeholder='email'/>
                    <input type="submit" value='Submit'  />
                </form>
            </>
        }

        <div>
            {
                user && 
                <>
                    <p>You account status: {user.emailVerified ? 'Verifyed' : 'not verify'}</p>
                    <p>Name: {user.displayName}</p>
                    <p>email: {user.email}</p>
                    <img src={user.photoURL} alt="" />
                </>
            }
        </div>
        <Routes>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/dashboard' 
                element={
                    <RequireAuth>
                        <Dashboard />
                    </RequireAuth>
                }></Route>
        </Routes>
    </div>
  );
}

export default App;
