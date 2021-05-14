import React, { useContext } from 'react'
import { TasksContext } from '../contexts/TasksContext'

const Tasks = () => {
  const context = useContext(TasksContext);
  console.log(context);
  return (
    <div>
      adfa
    </div>
  )
}

export default Tasks
