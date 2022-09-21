import React, { useState } from 'react'
import { GrAdd } from "react-icons/gr";
import Note from './Note';





export default function MakeNote(props) {


    const [note, setNote] = useState({
        title: "",
        content: ""

    });
    const makeNote = (event) => {
        const { name, value } = event.target
        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value
                
            }
            
        })


    }

    const addClicked = () => {
       props.passNote(note);
       setNote({
        title: "",
        content: ""

       })

    }



    return (
        < >

            <div className="modal mb-[50px] position-static d-block   py-5 mb-[50px] bg-yellow-100"  >
                <div className="modal-dialog" >
                    <div className="modal-content rounded-4 shadow">

                        <div className="modal-footer flex-column border-top-0">
                            <input placeholder='Title Here'value={note.title} name='title' onChange={makeNote} type="text w-[250px] border-blue border-2px" className='rounded-md px-[5px]' style={{ border: "2px solid grey", outline: "none" }} />
                            <textarea placeholder='Take a Note'value={note.content} name='content' onChange={makeNote} className='px-[5px] bg-violet-100 rounded-md' id="" cols="50" rows="4"></textarea>

                        </div>
                    </div>


                </div>
                <button type="button" className="btn btn-primary btn-sm " onClick={addClicked}> <GrAdd className='w-[30px] h-[30px]' /></button>

            </div>
            



        </>
    )

}



