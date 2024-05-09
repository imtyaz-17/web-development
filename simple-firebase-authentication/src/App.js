import './App.css';
import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from './firebase/firebase.init';
import { useState } from 'react';

const auth = getAuth(app)

function App() {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState({})
  const handleGoogleAuthenticate = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        console.error(error);
      })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(error => {
        console.error(error);
      })
  }
  return (
    <div className="App">
      <button onClick={handleGoogleAuthenticate}>Google </button>
      <h2>User Name:{user.displayName} </h2>
      <button onClick={handleSignOut}>Log Out</button>
    </div>
  );
}

export default App;
