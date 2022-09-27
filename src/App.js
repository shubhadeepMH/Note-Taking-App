import React from 'react'
import SignUp from './SignUp'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import TaskBar from './TaskBar'
import Popup from './Popup'
import Login from './LogIn'


export default function App() {
  const [datas, addData] = useState([])
  const [reDirect, setReDirect] = useState(true)
  const [iscorrectInfo, setIsCorrectInfo] = useState(false)
  const dataStorage = (user) => {
    if(user.userName.length==0 || user.emailId.length==0 || user.passWord.length==0 ){
     
      alert(" Please fill all the information")
    }else{
      
        
      addData((prevData) => {
        // setReDirect(true)
      
             return [...prevData,user]
      }
      )
      
    }
  
  }
  const checkinfo = (userverify) => {

    if(datas.length==0){
      alert("Sign Up First!")
    }
    else if(userverify.userName.length==0||userverify.passWord.length==0){
        alert("Enter all details")
    }
    else{
      for (let data in datas) {
      

      
       if(  datas[data].userName == userverify.userName && datas[data].passWord == userverify.passWord ){
         // console.log(datas[data].userName, userverify.userName);
         setIsCorrectInfo(true)
         
         
       }
         

      }
  
    }
   


  }


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path= '/Task' element={<TaskBar />} />
          <Route path='/' element={<SignUp dataStorage={dataStorage} reDirect={reDirect} />} />
          <Route path='/login' element={<Login checkinformation={checkinfo} reDirect={iscorrectInfo} />} />



        </Routes>



      </BrowserRouter>






    </div>
  )
}
