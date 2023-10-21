import React from "react"
import { Task } from "./Tasks/Task"
import { TaskGroup } from "./Tasks/TaskGroup"
import { TaskMain } from "./Tasks/TaskMain"


export const RenderList = ({tasks, visible}) => {
  
  return <ul className='tree'>
    {tasks.map((task, i) => {
      if (task.isTaskGroup) {
        return <li>
            <TaskGroup task={task} visible={visible}/>            
        </li>
      } else {
        return <li>
        {
          task.tasksTreeItems.length > 0 ?
            <Task task={task} visible={visible}/>
           :
          <TaskMain task={task} />
        }
        
      </li>
      }
    })}
  </ul>
}