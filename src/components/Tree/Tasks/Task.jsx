import React from "react";
import { FunctionDate } from "../../Functions/FunctionDate";
import { RenderList } from "../RenderList";


export const Task = ({task, visible}) => {
  const [checked, setChecked] = React.useState(visible);
  React.useEffect(() => {
    setChecked(visible);
  }, [visible]);
  return <div>
  <input onClick={() => setChecked(!checked)} type="checkbox" checked={checked} id={task.id} />                  
  <label className={task.state === 'Завершено' ? 'cancel tree_label' : 'progress tree_label'} for={task.id}>
    <span>
      {task.performer.displayName}, {task.performer.position} <em>{task.state}</em>
    </span>
    <div>
      {task.content && <span>Задание: {task.content}</span>}
    </div>
    <div>
      {task.createDate && <span>Исполнение с {FunctionDate(new Date(task.createDate))}</span>}
    </div>
      {task.endDate && <span>Выполнить до {FunctionDate(new Date(task.endDate))}</span>}
    <div>
      {task.report && <span>Отчет: {task.report}</span>}
    </div>
    </label>
    {(checked) && <RenderList tasks={task.tasksTreeItems} visible={visible}/>}
  </div>
}