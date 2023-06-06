import { useState, useEffect } from "react"
import { AuthContext } from "./AuthContext"
import { User } from "../../types/User";
import { useAPI } from "../../hooks/useAPI";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  
  const [user, setUser] = useState<User | null>(null)
  const api = useAPI()

  useEffect(() => {
    const validateToken = async () => {
      const storageDate = localStorage.getItem('authToken')
      if (storageDate) {
        const data = await api.validadteToken(storageDate)
        if (data.user) {
          setUser(data.user)
        }
      }
    }
    validateToken()
  },[api])

  const signin = async (email: string, password: string) => {
    const data = await api.signin(email, password)
    if (data.user && data.token) {
      setUser(data.user)
      setToken(data.token)
      return true
    } 
    return false
  }

  const signout = async () => {
    await api.logout()
    setUser(null)
    setToken('')
  }

  const setToken = (token: string) => {
    localStorage.setItem('authToken', token)

  }

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
}