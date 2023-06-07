import { error, log } from 'console';

import { NextRequest,NextResponse } from "next/server";
import { todoTable,Todo,db, newTodo } from '../lib/drizzle';
import { sql } from '@vercel/postgres';
export async function GET(){

    try{
        await sql `CREATE TABLE IF NOT EXISTS Todo(id serial, Task varchar(255));`
    const res = await db.select().from(todoTable).execute()
    console.log(res);
    
       
        return NextResponse.json({data:res})

    }catch(err){
        console.log(err);
        return NextResponse.json({message:"Something went wrong"})
        
    }


}

export async function POST(Request:NextRequest){
    const req = await Request.json();
    try{
        if(req.task){
                             //this task can be done by replacing insert with update, delete
         const res =    await db.insert(todoTable).values({
            task:req.task
         }).returning()
         console.log(res);
         
            return NextResponse.json({message:'POST Method worked Succesfully'})
        }else{
            throw new Error('task field is required')
        }

    }catch(error){
       console.log((error as {message:string}).message)
        return NextResponse.json({message: ( error as unknown as {message:string}).message})
    }
}

//post is also same as get in displaying api on UI
