import React, { useState } from 'react'
import MakeNote from './components/MakeNote'
import Navbar from './components/Navbar'
import Note from "./components/Note"
import Challange from './components/Challange'




export default function App() {
  const [addNote, setAddNote] = useState([])

  const displayNote = (Note) => {

    setAddNote((prevData) => {
      return [...prevData, Note]
    })

  }
  const Delete = (id) => {
    // console.log(id);
    setAddNote((prevData) =>
      // console.log(prevData)
      prevData.filter((data, index) => {

        return index != id

      })
    )


  }


  return (
    <div>
      <Navbar className='mb-[50px]' />
      <MakeNote passNote={displayNote} />

      <div className='grid grid-cols-4 mx-[6px]'>
        {
          addNote.map((element, index) => {

            return (


              <Note title={element.title} Delete={Delete} key={index} content={element.content} id={index} />


            )
          })
        }


      </div>

      {/* <div className=' w-[230px] text-center mx-auto mt-[200px]'>
      <Challange/>
 </div> */}











    </div>
  )
}
