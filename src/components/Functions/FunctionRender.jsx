import React from "react";
import { RenderList } from "../RenderTree/RenderList";

export default function FunctionRender (tasks, visible) {
  return <ul>
    {tasks.map((task, i) => {
      return <RenderList task={task} i={i} visible={visible}/>
    })}
  </ul>
}