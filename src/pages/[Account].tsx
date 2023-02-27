/* eslint-disable @typescript-eslint/no-floating-promises */
import React from 'react'
import { useSession, signOut } from 'next-auth/react'


const Account = () => {
const { data: session } = useSession()
  return (
    <div>
        {session ?  (
        <div>
            <h1>Account</h1>
            <h1>{session?.user?.email}</h1>
            <button onClick={() => {signOut();}}>Sign out</button>
        </div>
            ):(
        <div>
            <h1>Not signed in</h1>
        </div>)}
    </div>
  )
}

export default Account