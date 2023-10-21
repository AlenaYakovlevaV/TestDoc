import React from "react";
import { DocumentInfo } from "../Documents/DocumentInfo";
import { FunctionRender } from "../Functions/FunctionRender";

export const DocumentPage = ({docInfo, tasksTree, setPage}) => {
  return <>
    <button className="btn__main" onClick={() => setPage(true)}>Назад</button>
    <h2>Информация о документе "{docInfo.description}"</h2>
    <DocumentInfo docInfo={docInfo} />
    <FunctionRender tasks={tasksTree} />
  </>
}