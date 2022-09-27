import React from 'react'
import { AiFillDelete, AiFillPropertySafety } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

export default function PopUp2(props) {

    const closePopUp = () => {
        props.showPopUp()

    }
    const deleteTask = () => {
        props.deleted(props.id)
    }
    return (
        <div className=' drop-shadow-md'>

            <div id={props.id} className=' outline-dashed outline-2 outline-offset-2 bg-blue-100  rounded-md z-10   pl-[20px]  ml-[4rem] mb-[8rem]  h-[14rem] w-[13rem] sm:ml-[20rem] md:ml-[25rem]'>
                <div className='flex'>
                    <button onClick={closePopUp} className='mt-[8px]'>  <AiOutlineClose className='h-[25px] w-[3rem]  ' /></button>
                    <button onClick={deleteTask} className=' '>  <AiFillDelete className='h-[2rem] w-[3rem] ml-[6rem] ' /></button>
                    
                </div>
                <div>
                <h2 className=' text-center text-2xl mr-[15px]'> Details</h2>
                </div>

                <input value={props.name} className='h-[2rem] rounded-md mt-[2rem] mr-[2rem]' type="text"></input>
                <textarea value={props.details} className='mt-[1rem] rounded-md  px-[3px]' rows='3' cols="23" ></textarea>
                <div className='Buttons  h-[2rem] mt-[3rem]'>



                </div>


            </div>

        </div>
    )
}
