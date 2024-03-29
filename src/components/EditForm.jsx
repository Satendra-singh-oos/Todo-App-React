import React, { useEffect, useState } from 'react'

import { CheckIcon} from '@heroicons/react/24/solid'

const EditForm = ({editedTask,updateTask ,closeEditMode}) => {
    const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateTask({...editedTask,name:updatedTaskName})

  }

  
  useEffect(()=> {
    const closeModalIfEscaped = (e) => {
      e.key === "Escape" && closeEditMode();
    }

    window.addEventListener('keydown', closeModalIfEscaped)

    return () => {
      window.removeEventListener('keydown', closeModalIfEscaped)
    }
  }, [closeEditMode]) 

  return (
    <div 
    role='dialog'
     aria-label='editTask'
     onClick={(e)=> {e.target === e.currentTarget && closeEditMode()}}
    >
      <form
      className='todo'
      onSubmit={handleFormSubmit}
      >
          <div className='wrapper '>
              <input
              type='text'
              id="editTask"
              className='input'
              value={updatedTaskName}
              onInput={(e)=>setUpdatedTaskName(e.target.value)}
              required
              maxLength={50}
              placeholder='Update Your Task'
      
              />
              <label
              htmlFor="editTask"
               className='label'
              >Update Your Task</label>
              </div>
      
           <button
           type='submit'
           className='btn'
           aria-label={`Confirm edited task to now read ${updatedTaskName}`}
           >
           <CheckIcon strokeWidth={2} height={24 } width={24}/>
          </button>
      
      
      </form>
    </div>
  )
}

export default EditForm