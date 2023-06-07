import React from 'react'
import fetch from 'node-fetch'
import { Todo} from '@/app/lib/drizzle'
// interface todo {
// id:number,
// task:string
// }
const  getData = async()=>{

    try{
const res = await fetch("http://127.0.0.1:3001/api/",{
        method:"GET",
        headers:{

            "Content-Type":"application/json"
        }
    });

    
    if(!res.ok){
        throw new Error("Failed to fetch the data")
    }
  const result= await res.json()
  return result
    }catch(error){
        console.log((error as {message:string}).message)
    }
    

}

const TodoList =async(props:any) => {
    const res :{data:Todo[]}= await getData() as [];
    
  return (
<>

<div className=' max-h-[200px]  md:max-h-[400px]  overflow-scroll  scrollbar-thumb-primary/50  scrollbar-track-transparent scrollbar-thin scrollbar-thumb-rounded'> 

{
    
    res.data.map((item)=>{
        return(
            <div key={item} className='flex max-w-md max-h-12 mx-4 my-3  py-1.5 bg-gray-300/70 rounded-md shadow-lg justify-start items-center gap-x-4  px-4  backdrop-blur-lg'>
        {/* circle */}
<div className='rounded-xl bg-primary w-2.5 h-2.5'></div>
{/* title */}
<div className='text-xl text-black/70 font-mono font-semibold'>{item.task}</div>
    </div>  
        )
        
        
    })
}
</div>

</>
  )
}

export default TodoList