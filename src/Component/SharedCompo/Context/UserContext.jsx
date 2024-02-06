import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../Authentication/Firebase.Init.Config";

export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const gitHubProvider = new GithubAuthProvider();

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateProfileInfo = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const signInWithPopGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const signInWithPopGitHub = () => {
    return signInWithPopup(auth, gitHubProvider);
  };
  const AuthInfo = {
    signInWithPopGitHub,
    updateProfileInfo,
    loading,
    logOut,
    user,
    auth,
    createUser,
    logIn,
    signInWithPopGoogle,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (createUser) => {
      setUser(createUser);
      console.log(createUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, [auth]);

  return (
    <div>
      <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
