import React from "react";
import { MainButton } from "../Buttons/MainButton";
import { RenderList } from "../Tree/RenderList";


export const FunctionRender = ({tasks}) => {
  const [visible, setVisible] = React.useState(true);
  
  return <div>
    <MainButton setVisible={setVisible} />
    <RenderList tasks={tasks} visible={visible} />
  </div>
}

