import React, { useState } from 'react'
import {FcGoogle} from 'react-icons/fc'
import {AiFillFacebook} from 'react-icons/ai'
import { Link } from 'react-router-dom'


export default function Register() {
    const [selects,setSelects] = useState();
  return (
    <div className='relative w-full h-screen bg-zinc-900/90'>
    

    <div className='flex justify-center items-center h-full'>
        <form className='max-w-[400px] w-full mx-auto bg-white p-8'>
            <h2 className='text-3xl font-bold text-center py-4'>Ayush Global Connect</h2>
            {/* <div className='flex justify-between py-8'>
                <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><AiFillFacebook className='mr-2' /> Facebook</p>
                <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><FcGoogle className='mr-2' /> Google</p>
            </div> */}
            <div className='flex flex-col mb-4'>
                <label>Email</label>
                <input className='border relative bg-gray-100 p-2' type="text" />
            </div>
            <div className='flex flex-col mb-4'>
                <label>User Type</label>
                <select className='border relative bg-gray-100 p-2' value={selects} onChange={e=>setSelects(e.target.value)}>
                    <option>--Types--</option>
                    <option>Startup</option>
                    <option>Investor</option>
                    <option>Individual User</option>
                    <option>Mentor</option>
                    <option>Incubator</option>
                    <option>Accelerators</option>
                    <option>Government Agencies</option>
                </select>
            </div>
            <div className='flex flex-col mb-4'>
                <label>Password</label>
                <input className='border relative bg-gray-100 p-2' type="password" />
            </div>
            <div className='flex flex-col mb-4'>
                <label>Confirm Password</label>
                <input className='border relative bg-gray-100 p-2' type="password" />
            </div>
            <button className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white'>Sign Up</button>
            {/* <p className='flex items-center mt-2'><input className='mr-2' type="checkbox"  />Remember Me</p> */}
            <p className='text-center mt-8'>Already a member? <Link to="/Login" className='hover:text-lime-700'>Login now</Link></p>
        </form>
    </div>
    </div>
  )
}