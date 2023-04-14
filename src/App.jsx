import { useState } from 'react'
import CustomForm from './components/CustomForm'
import TaskList from './components/TaskList';
import EditForm from './components/EditForm';


import useLocalStorage from './hooks/useLocalStorage';



function App() {
  const [tasks, setTasks] = useLocalStorage('react-todo.tasks', []);
  const [editedTask, setEditedTask] = useState(null)
  const [isEditing, setIsEditing] = useState(false);
 

  const addTodo = (task) =>{
  //  console.log(task);
   setTasks(lastState=>[...lastState,task])
  }

  const deleteTodo = (id) =>{
    setTasks(lastState => lastState.filter(task => task.id !== id));
  }

  const toggleTodo = (id)=>{
    setTasks(lastState => lastState.map(t=>(
      t.id === id ? {...t, checked: !t.checked} :t
    )))
  }


  const closeEditMode = () =>{
    setIsEditing(false)
  }


  const updateTask = (task)=>{
    setTasks(lastState => lastState.map(t=>(
      t.id === task.id ? {...t, name: task.name} :t
    )))
    
    closeEditMode();
  }


  
  const enterEditMode = (task)=>{
    setEditedTask(task);
    setIsEditing(true);
  }
  
  


  return (
    <>
    <div className="container">
      
      <header>
        <h1>My Todo List</h1>
      </header>
      {
       isEditing &&(
        <EditForm 
        editedTask={editedTask}
        updateTask={updateTask}
        closeEditMode={closeEditMode}
        />
       )
      }
      <CustomForm addTodo={addTodo}/>
     {  tasks &&
      <TaskList 
       tasks={tasks}
       deleteTodo={deleteTodo}
       toggleTodo={toggleTodo}
       enterEditMode={enterEditMode}
     /> }


    </div>
    </>
  )
}

export default App
