/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/Auth/AuthContext'

const Login = () => {
  const auth = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] =useState('')

  const handleLogin = async (event: { preventDefault: () => void }) => {
    event.preventDefault()
    if (email && password) {
      const isLogged = await auth.signin(email, password);
    }
  }

  return (
    <div>
      <h2>Página de Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Digite seu email"
        />
        <br />
        <br/>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Digite sua senha"
        />
        <br />
        <br/>
        <button type="submit">Logar</button>
      </form>
    </div>
  );
}

export default Login