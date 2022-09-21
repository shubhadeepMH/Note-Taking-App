import React from 'react'
import { MdDeleteForever } from "react-icons/md";


export default function Note(props) {

  const DeleteNote=()=>{
    props.Delete(props.id)
    
  }
  return (
    <div className='bg-yellow-300 rounded-md w-[270px]' id={props.id}>
     <div className='bg-yellow-100 rounded-md my-[9px]  text-center'>
     <h1>{props.title}</h1>
    
     </div>
     
     <div className='bg-white mt-[6px] mx-[3px] rounded-md my-[10px] pl-[5px]'>
    <p>{props.content}</p>

     </div>
     <button onClick={DeleteNote} className='relative right-0 bg-white ml-[5px] w-[30px] h-[30px] rounded-full shadow-md'><MdDeleteForever className='w-[30px] h-[30px]'/></button>
    </div>
  )
}

