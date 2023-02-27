import React from 'react'
import { MdEmail } from "react-icons/md";
import { AiFillLock } from "react-icons/ai";
import { AiOutlineGoogle , AiOutlineTwitter} from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { useSession, signIn, signOut } from 'next-auth/react';

const Register = () => {
  const { data: session } = useSession()
  return (
    <div className='flex flex-col'>
      {session ?  (
        <div  className='border border-black flex flex-col justify-center items-center' >
            <h1>Account</h1>
            <h1>{session?.user?.email}</h1>
            <h1>{session?.user?.name}</h1>
            <img className='w-10' src={session?.user?.image} alt="" />
            <button onClick={() => {signOut();}}>Sign out</button>
        </div>
            ):(
        <div>
            <h1>Not signed in</h1>
        </div>)}
      <div className="flex flex-col gap-4">
        <h1 className="font-semibold text-lg">Join thousands of learners from around the world</h1>
        <p>Master web development by making real-life projects. There are multiple paths for you to choose</p>
      </div>
      
      <form className='flex flex-col gap-4 mt-6'>
          <div className="flex flex-row gap-2 items-center w-full h-12 border border-[#BDBDBD] rounded-xl pl-2">
            <MdEmail className='text-[#828282] w-5'/>
            <input type="text" placeholder="Email" />
          </div>
          <div className="flex flex-row gap-2 items-center w-full h-12 border border-[#BDBDBD] rounded-xl pl-2">
            <AiFillLock className='text-[#828282] w-5'/>
            <input type="text" placeholder="Password" />
          </div>
          <button onClick={() => {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            signIn();
          }} className='bg-[#2F80ED] w-full h-9 text-white text rounded-lg'>Start coding now</button>
      </form>

      <div className="flex flex-col justify-center items-center mt-5 gap-4">
        <p className='font-normal text-[#828282]'>or continue with these social profile</p>
          <div className='flex gap-5'>
              <div className=" flex justify-center items-center p-2  rounded-full border border-[#828282] cursor-pointer">
                <AiOutlineGoogle className='text-[#828282]'
                onClick={() => {
                  // eslint-disable-next-line @typescript-eslint/no-floating-promises
                  signIn(
                    "google",
                  );
                }}
                />
              </div>
              <div className=" flex justify-center items-center p-2  rounded-full border border-[#828282] cursor-pointer">
                <AiFillGithub className='text-[#828282]'
                onClick={() => {
                  // eslint-disable-next-line @typescript-eslint/no-floating-promises
                  signIn(
                    "github",
                  );
                }} />
              </div>
          </div>
        <span>Already a member? <a href="" className='text-[#2D9CDB]' >Login</a></span>
      </div>

      {/* <div className='flex justify-between'>
          <h1>Ahmad Othman</h1>
          <h1>devcherllenges.io</h1>
      </div> */}

    </div>
  )
}

export default Register