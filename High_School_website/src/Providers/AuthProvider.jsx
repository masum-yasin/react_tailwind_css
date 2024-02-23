import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';




export const authContext = createContext()
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading]=useState(true)
    const createuser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const updateUserProfile = (name,photo)=>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL:photo
          });
    }
    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            console.log('current user',currentUser);
            setLoading(false);
        })
        return()=>{
            return(unsubscribe)
        }
    },[])
    const authInfo = {
        user,
        loading,
        createuser,
        signIn,
        logOut,
        updateUserProfile,
    }
    return (
        <>
      <authContext.Provider value={authInfo}>
        {children}
      </authContext.Provider>
        </>
    );
};

export default AuthProvider;