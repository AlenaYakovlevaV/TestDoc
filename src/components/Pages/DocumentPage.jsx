import React from "react";
import { DocumentInfo } from "../Documents/DocumentInfo";
import { MainButtons } from "../Buttons/MainButtons";
import FunctionRender from "../Functions/FunctionRender";

export const DocumentPage = ({docInfo, tasksTree, setPage}) => {
  const [visible, setVisible] = React.useState(true);

  return <div>
    <button className="btn__main" onClick={() => setPage(false)}>Назад</button>
    <h2>Информация о документе "{docInfo.description}"</h2>
    <DocumentInfo docInfo={docInfo}/>
    <MainButtons setVisible={setVisible}/>
    {FunctionRender(tasksTree, visible)}
  </div>
}