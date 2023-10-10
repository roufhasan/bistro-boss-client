import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setloading] = useState(true);

  // Sign in with Email and Password
  const signIn = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Create User with Email and Password
  const createUser = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign Out
  const logOut = () => {
    setloading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      setloading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    setloading,
    createUser,
    signIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
