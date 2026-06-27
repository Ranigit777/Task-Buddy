import { useState,useEffect } from 'react';
import TaskForm from './Components/TaskForm'
import TaskList from './Components/TaskList'
import ProgressTracker from './Components/ProgressTracker'

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));
  });

  const addTask = (task)=>{
    setTasks([...tasks, task])
  }

  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i != index ))
  }
  const clearTasks = () => {
    setTasks([]);
  }
  return (
    <div>
      <header>
        <h1>TaskMan</h1>
        <p><i>Your friendly Task Manager</i></p>
      </header>

      <TaskForm addTask = {addTask}/>
      <TaskList tasks = {tasks}
       updateTask = {updateTask} 
       deleteTask = {deleteTask}/>
      <ProgressTracker tasks={tasks} />
      {tasks.length>0 &&
        (<button onClick={clearTasks}
          className='clear-btn'>Clear all Tasks</button>
        )}
    </div>
  )
}