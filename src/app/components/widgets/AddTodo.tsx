'use client'
import React, { useState } from 'react'
import Button from './Button'
import Image from 'next/image'
import ADDTODO from "../../../../public/SubmitTodo.png"
import { newTodo } from '@/app/lib/drizzle'
// import fetch from 'node-fetch'
import { useRouter } from 'next/navigation'



const AddTodo = () => {
    const [task,setTask]= useState<newTodo | null>(null);
    const { refresh } = useRouter();

    const handleSubmit = async()=>{
//if task have any task so call the  submit button orelse if it is empty so dont call it
 try {
       if(task){
     
              const res = await fetch("/api/",{
                    
                     method:"POST",
                    body:JSON.stringify({
                 task:task.task
                    })
                 })
                 
                 console.log(res.ok)
            refresh();
                }
             }//if-task
    
 catch (error) {
    console.log("error");
    
 }
}

   
  return (
    <div>

        <form className='w-full flex justify-center items-center'>
            <input onChange={(e)=>{setTask({task:e.target.value})}} className='rounded-full w-full my-4 mx-3   py-3 px-5 border  focus:outline-primary' placeholder='Add new Todo' type='text'/>
            <button type='button' onClick={handleSubmit} className="hover:outline-primary" >
                <Image src={ADDTODO} className='w-full   shrink-0 h-full w-[70px] h-[50px]'/>
            </button>
            {/* <Button/> */}
        </form>
    </div>
  )
 
}

export default AddTodo