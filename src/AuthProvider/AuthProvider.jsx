import { createContext, useEffect, useState } from 'react'
import auth from "../firebase/firebase.config"
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const googleAuth = new GoogleAuthProvider();
    const githubAuth = new GithubAuthProvider();

    const emailPasswordSignUp = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleAuth)
    }
    const githubLogin = () => {
        setIsLoading(true);
        return signInWithPopup(auth, githubAuth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setIsLoading(false)
        });
        return () => unsubscribe();
    }, [])

    const updateUserProfile = (name,photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    const logout = () => {
        return auth.signOut()
    }

    const data = { user, isLoading, updateUserProfile, googleLogin, githubLogin, emailPasswordSignUp, signIn, logout }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>

    )



}

export default AuthProvider