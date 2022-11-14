import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { tutorLogin } from '../../utils/ApiRoutes';

import { useStateContext } from '../../contexts/ContextProvider'
import { MdAdminPanelSettings } from 'react-icons/md';
import { useNavigate } from 'react-router-dom'

function TutorLogin() {
   

    const { setShow ,setActiveMenu } = useStateContext()

    const [formData, setFormData] = useState({
        email: '',
        password: '',
      })
    
      const navigate = useNavigate()

    useEffect(() => {
        setShow(false)
        setActiveMenu(false)
    } , [])



    const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
      }


    const onSubmit = (e) => {
        e.preventDefault()
        console.log('trigered');
        console.log('form data',formData);

        const tutorLog = async() => {
               const response = await axios.post(tutorLogin ,formData)
               console.log('tutor response',response);
               if(response.data){
                localStorage.setItem('panel', 'tutorPanel')
                localStorage.setItem('tutorData', JSON.stringify(response.data))
                navigate('/tutor_home')
               
            }
        
        }
        tutorLog()

    }

 
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-sky-200 rounded-3xl shadow-md lg:max-w-xl">
                <div className='flex justify-center mb-4'>
                < MdAdminPanelSettings className='font-extrabold text-5xl text-sky-500 fill-current'  />
                </div>
                <h1 className="text-3xl font-semibold text-center text-sky-500 ">
                   Tutor Log in
                </h1>
                <form onSubmit={onSubmit} className="mt-6">
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder='Enter your email'
                            name='email'
                            onChange={onChange}
                            className="block w-full px-4 py-2 mt-2 text-sky-700 bg-white border rounded-full focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name='password'
                            placeholder='Enter password'
                            onChange={onChange}
                            className="block w-full px-4 py-2 mt-2 text-sky-700 bg-white border rounded-full focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    
                    <div className="mt-6">
                        <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-sky-500 rounded-full hover:bg-sky-400 focus:outline-none focus:bg-sky-400">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TutorLogin
