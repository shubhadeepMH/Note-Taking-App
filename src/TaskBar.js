import React, { useState } from 'react'
import { CgAdidas } from "react-icons/cg";
import { FiMoreVertical } from "react-icons/fi";
import { GrAdd } from "react-icons/gr";
import { BsCircle } from "react-icons/bs";
import Popup from './Popup';
import PopUp2 from './PopUp2';
import Login from './LogIn';
export default function TaskBar() {
    const [index,setIndex]=useState(0)
    const [showpop, setShowpop] = useState(false)
   
    const [closePopUp2,setClosePopUp2]=useState(false)
    const [taskStorage, setTaskStorage] = useState([])
    const [show,setShow]=useState({
        Name:"",
        Detail:""
    })
    const addTasks = (Task) => {

        setTaskStorage((prevData) => {
            return [...prevData, Task]


        })
        setShowpop(false)


    }
    
    const deleted=(id)=>{
        setTaskStorage((prevData)=>
       prevData.filter((element,index)=>{
                return index!=id
            })

        )
        setClosePopUp2(false)
        
    }
    const showPopUp2=()=>{
        setClosePopUp2(false)
    }
    const showPopUp = () => {
        if (showpop == true) {

            setShowpop(false)
        } else {
            setShowpop(true)

        }

    }
    const showDetails=(id)=>{
            
           for(let data in taskStorage){
            //    console.log(data);
               if(id==data){
                   
                    setIndex(id)
                    setClosePopUp2(true)
                    setShow({
                        Name:taskStorage[data].name,
                        Detail:taskStorage[data].detail
                    })

                }

           }
    }
    return (
        <div>
       
            <div className='Header bg-green-300 h-[6rem] '>
                <div className='flex'>
                    <CgAdidas className='h-[5rem] w-[5rem] pt-[10px]' />
                    <h1 className='text-3xl pt-[7px]'>MyTasks</h1>


                </div>
                <img className='absolute top-3 rounded right-3 bg-blue-300 w-[80px] h-[80px]' src='https://images.unsplash.com/photo-1663814755381-2692955e7752?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'></img>
            </div>
            <div className=' ml-[2rem]  h-[10rem] w-[19rem] outline outline-offset-2 outline-cyan-500 md:ml-[4rem] mt-[2rem]' >
                <div className='upper flex '>
                    <h2 className='text-lg ml-[9px]'>My Tasks</h2>
                    <FiMoreVertical className='h-[30px] w-[30px] ml-[12rem] ' />
                </div>
                <div className='Lower flex inline  h-[7rem] mt-[14px] drop-shadow-xl'>
                    <h2 className=' pt-[30px] pl-[13px] font-bold opacity-75'>add Task</h2>
                    <button data-toggle="modal" data-target="#exampleModal" onClick={showPopUp} className=' ml-[11rem] mb-[20px] rounded-full'><GrAdd className='h-[2rem] w-[2rem] bg-blue-400' /></button>
                    <div>

                    </div>

                </div>
                <div className=' h-[10rem] mt-[3rem]  '>
                    {
                        taskStorage.map((element, index) => {
                            {/* console.log(element) */}
                            return (
                                <div z-0 onClick={()=>showDetails(index)} key={index} id={index}className='Tasks h-[44px] bg-white pl-[5px] mx-[8px] relative top-3 mt-[6px]    flex rounded-md drop-shadow-xl'>
                        <BsCircle className={`bg-green-500 rounded-full h-[2rem] w-[2rem] pt-[5px]`} />
                        <div className='pt-[7px] pl-[6px]'><h2 className='font-mono pl-[2px] Click me'>Click Me</h2></div>
                        
                        <h2 className='pt-[7px] ml-[6rem] font-serif pt-[5px]'>{element.name}</h2>
                    </div>

                        )



                        })
                    }
                  
                    {closePopUp2 && <PopUp2 deleted={deleted} showPopUp={showPopUp2} name={show.Name} details={show.Detail} id={index} /> }
                    
                   
                </div>


            </div>
            {showpop && <Popup addTasks={addTasks} showPopUp={showPopUp} />

            }

        </div>
    )
}
