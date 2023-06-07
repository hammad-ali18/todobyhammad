import Image from 'next/image'
import TodoList from './components/shared/TodoList'
import AddTodo from './components/widgets/AddTodo'

export default function Home() {
  return (
  <main className=' bg-gradient-to-tr from-secondary to-primary h-screen
  flex flex-col justify-center items-center '>
     <div>
       <h1 className=' text-5xl md:text-7xl font-mono  backdrop-blur-lg text-white font-bold animate-waving-hand mb-10  md:mb-20'>ADD YOUR TODO</h1>
     </div>
    <div className=' px-4 py-6 w-full max-w-sm md:max-w-md shadow-2xl rounded-xl  bg-gradient-to-br from-white/50 to-white/20 backdrop-blur-xl bg-opacity-50 '> 
      <div>
        {/* @ts-ignore*/}
        <TodoList />
     

    
      <AddTodo />
      <div className='w-2/5 flex items-center justify-center mx-auto h-1.5 bg-black/25 rounded-lg'></div>

    </div>
    </div>
  </main>
  )
}
