import React from "react";
import { RenderTask } from "./RenderTask";
import { RenderGroup } from "./RenderGroup";
import FunctionRender from "../Functions/FunctionRender";

export const RenderList = ({task, i, visible}) => {
  const [show, setShow] = React.useState(true);
  
  return <div className='block__item'>
    {task.tasksTreeItems.length > 0 && 
    <div className="button__item">
      <button 
        onClick={() => setShow(!show)}
        className={visible && show ? 'minus' : 'plus'
        }></button>
    </div>}
    {show && <div><li key={i} className={task.state === 'Завершено' ? "list__cancel list__item" : "list__progress list__item"}>
  {
    task.isTaskGroup ? 
    <RenderTask task={task} /> :
    <RenderGroup task={task} />
  }
    {visible && task.tasksTreeItems.length > 0 && FunctionRender(task.tasksTreeItems, visible)}
</li></div>}
  </div>
}