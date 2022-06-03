import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { ChangeEvent, FormEvent, useState } from 'react'
import { signup } from '../lib/user'

const Signup: NextPage = () => {
  const [ email, setEmail ] = useState("")
  const [ username, setUsername ] = useState("")
  const [ password, setPassword ] = useState("")
  const router = useRouter()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const result = await signup(email, username, password)
    if (result.success) {
      router.push('/login')
    }
  }

  const changeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }
  const changeUsername = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }
  const changePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  return (
    <div>
      <main>
        <h2>ユーザ登録</h2>
        
        <form onSubmit={handleSubmit}>
          <input type="text" name="email" value={email} onChange={changeEmail} />
          <input type="text" name="username" value={username} onChange={changeUsername} />
          <input type="password" name="password" value={password} onChange={changePassword} />
          <button>登録</button>
        </form>
      </main>
    </div>
  )
}

export default Signup
