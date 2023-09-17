import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [pseudo, setPseudo] = useState(null)
  return (
    <div>
        Votre pseudo<br/>
        <input type='text' onChange={(e) => {setPseudo(e.target.value)}}/>
        {pseudo && <Link to={"/"+pseudo}>Connect</Link>}
    </div>
  )
}

export default Login