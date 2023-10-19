import { FunctionDate } from "../Functions/FunctionDate";

export const RenderTask = ({task}) => {
  return <div>
  <span>{task.author.displayName}, {task.author.position} <em>{task.state}</em></span>
  <div>
    {task.content && <span>Резолюция: {task.content}</span>}
  </div>
  <div>
  {task.endDate && <span>Выполнить до {FunctionDate(new Date(task.endDate))}</span>}
  </div>
</div>
}