import React, { useState } from 'react'

import { AiOutlineClose } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";

export default function Popup(props) {
    const[Task,setTask]=useState({
        name:"",
        detail:""
    })

    const updateTask=(event)=>{
        const{name,value}=event.target
        setTask((prevData)=>{
        return{
            ...prevData,
            [name]:value
        }

        })
    }
    const addTask=()=>{
        props.addTasks(Task)
        setTask({
            name:"",
            detail:""
        })

    }
    const colsePopUp=()=>{
        props.showPopUp()
    }
    return (
        <div>
            <div className='bg-blue-200 rounded-xl body h-[16rem] w-[16rem] ml-[6rem] relative bottom-12 '>
                <div className='upper flex'>

                    <button onClick={colsePopUp} className='mt-[8px] ml-[13rem]'>  <AiOutlineClose className='h-[2rem] w-[3rem]' /></button>

                </div>
                <div className='Body ml-auto pl-[30px] '>

                    <input name='name' value={Task.name} onChange={updateTask} type="text " placeholder='Name' className='h-[2rem] rounded-md' ></input>
                    <textarea name='detail' value={Task.detail} onChange={updateTask} className='mt-[2rem] rounded-md  px-[3px] ' rows='4' cols="25" placeholder='Details'></textarea>

                </div>
                 <GrAdd onClick={addTask} className='h-[2rem] w-[2rem] ml-[13rem] '/>


               


            </div>

        </div>
    )
}
