import React from 'react'

const Login = () => {
  const handleLogin = () => {
    // Perform OAuth2 login process
    window.location.href =
      'http://your-oauth2-server.com/oauth2/authorize?client_id=your-client-id&redirect_uri=http://your-redirect-uri.com&response_type=code&scope=read'
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login with OAuth2</button>
    </div>
  )
}

export default Login
