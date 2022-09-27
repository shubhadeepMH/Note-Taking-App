import React from 'react'
import { BiUserCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Login(props) {
    const [userverify, setUserverify] = useState({
        userName: "",
        passWord: "",

    })
    const enterDetail = (event) => {
        const { name, value } = event.target
        setUserverify((prevData) => {
            return {
                ...prevData,
                [name]: value
            }


        })

    }
    const checkInfo=()=>{
       
        props.checkinformation(userverify)
        setUserverify({
            userName: "",
            passWord: ""
    
        })
        
    }
    return (
        <div>
         <div className='bg-green-300  h-[35rem]  w-[70%]  h-[30rem] w-[70%] mx-auto mt-[5rem]'>
                <div className='mx-auto mt-[40px]  w-[80px]'>  <BiUserCircle className='h-[70px] w-[70px]' /> </div>
                <div className=' mr-[8px] text-center text-cyan-600 text-2xl font-sans'>Log In!</div>

                <div className='bg-white mt-[4rem] h-[18rem] mx-[23px]'>
                    <div className='box   text-center '> Enter username: <input name='userName' value={userverify.userName} onChange={enterDetail} className='mt-[1rem] h-[2.5rem] outline outline-offset-2 outline-1  rounded-md' placeholder='username' type="text"></input> </div>
                  
                    <div className='box   text-center '> Enter password: <input name='passWord' value={userverify.passWord} onChange={enterDetail} className='mt-[1rem] h-[2.5rem] outline outline-offset-2 outline-1  rounded-md' placeholder='Password' type="text"></input> </div>
                <Link to= '/Task'>
                    <button onClick={checkInfo} className='  text-center mx-[65px] w-[90px] bg-blue-200  mt-[25px] outline outline-offset-2 outline-1 sm:mx-[12rem] md:mx-[15rem] lg:mx-[17rem] xl:mx-[27rem] 2xl:mx-[33rem]' >submit</button>

                    </Link>
                   




                </div>


            </div>


      </div>
                
    )
}
