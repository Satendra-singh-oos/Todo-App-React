import React from 'react'
import TaskItems from './TaskItem'
import styles from './TaskList.module.css';

const TaskList = ({tasks , deleteTodo, toggleTodo,enterEditMode}) => {
  return (
    <ul className={styles.tasks}>
        {
          tasks.map((task)=>(
                <TaskItems
                id={task.id}
                task={task}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
                enterEditMode={enterEditMode}
                />
            )).reverse()
        }
    </ul>
  )
}

export default TaskList