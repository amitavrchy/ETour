import { useContext } from 'react'
import { AuthContext } from '../AuthProvider/AuthProvider'

const useAuth = () => {
    const {user, isLoading, updateUserProfile, googleLogin, githubLogin, emailPasswordSignUp, signIn, logout} = useContext(AuthContext);
  return (
    {user, isLoading, updateUserProfile, googleLogin, githubLogin, emailPasswordSignUp, signIn, logout}
  )
}

export default useAuth