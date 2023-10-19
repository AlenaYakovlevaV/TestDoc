import { FunctionDate } from "../Functions/FunctionDate"

export const RenderGroup = ({task}) => {
  return <div>
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
</div>
}