import React, { useState, useSyncExternalStore } from 'react'
import { BiUserCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';


export default function Login(props) {
    
    const [user, setUser] = useState({
        userName: "",
        emailId: "",
        passWord: ""

    })
    const enterDetail = (event) => {
        const { name, value } = event.target
        setUser((prevData) => {
            return {
                ...prevData,
                [name]: value
            }


        })

    }
    const storeData=()=>{
        props.dataStorage(user)
        setUser({
            userName: "",
            emailId: "",
            passWord: ""
    
        })
        
    }


    return (
        <div>
            <div className=' h-[35rem] bg-blue-300 w-[70%] sm:bg-blue-300 h-[30rem] w-[70%] mx-auto mt-[5rem]'>
                <div className='mx-auto mt-[40px]  w-[80px]'>  <BiUserCircle className='h-[70px] w-[70px]' /> </div>
                <div className=' mr-[8px] text-center text-cyan-600 text-2xl font-sans'>Sign up!</div>

                <div className='bg-white mt-[4rem] h-[18rem] mx-[23px]'>
                    <div className='box   text-center '> Enter username: <input name='userName' value={user.userName} onChange={enterDetail} className='mt-[1rem] h-[2.5rem] outline outline-offset-2 outline-1  rounded-md' placeholder='username' type="text"></input> </div>
                    <div className='box   text-center '> Enter Email Id :  <input name='emailId' value={user.emailId} onChange={enterDetail} className='mt-[1rem] h-[2.5rem] outline outline-offset-2 outline-1  rounded-md' placeholder='Email Id' type='email'></input> </div>
                    <div className='box   text-center '> Enter password: <input name='passWord' value={user.passWord} onChange={enterDetail} className='mt-[1rem] h-[2.5rem] outline outline-offset-2 outline-1  rounded-md' placeholder='Password' type="text"></input> </div>
                   <Link  to='/Task' >
                    <button onClick={storeData} className='  text-center mx-[65px] w-[90px] bg-blue-200  mt-[25px] outline outline-offset-2 outline-1 sm:mx-[12rem] md:mx-[15rem] lg:mx-[17rem] xl:mx-[27rem] 2xl:mx-[33rem]' >submit</button>

                    </Link>
                    <div className='text-center mt-[24px] text-green-500'>
                    <Link to='/login'> Log in </Link>

                    </div>





                </div>


            </div>
        </div>
    )
}

