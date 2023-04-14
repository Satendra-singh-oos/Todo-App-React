import React, { useState } from 'react'

import { PlusIcon } from '@heroicons/react/24/solid'

const CustomForm = ({addTodo}) => {

    const [task, setTask] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTodo({
      name: task,
      checked: false,
      id: Math.floor(Math.random()*1000)
    })
    setTask("")
  }

  return (
    <form
    className='todo'
    onSubmit={handleFormSubmit}
    >
        <div className='wrapper '>
            <input
            type='text'
            id="task"
            className='input'
            value={task}
            onInput={(e)=>setTask(e.target.value)}
            required
            maxLength={50}
            placeholder='Enter Your Task'
        
            />
            <label 
            htmlFor="task"
             className='label'
            >Enter Your Todo...</label>

            </div>
            
         <button
         type='submit'
         className='btn'
         aria-label='Add Task'
         >
         <PlusIcon />
        </button>
            
       
    </form>
  )
}

export default CustomForm