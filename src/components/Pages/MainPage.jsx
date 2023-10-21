import React from "react";
import { DocumentPage } from "./DocumentPage";
import { DocumentPreview } from "../Documents/DocumentPreview";

export const MainPage = ({docInfo, tasksTree}) => {
  const [page, setPage] = React.useState(true);

  return <div className="container">
    {page ? 
      <div>
        <h1>Доступные документы</h1>
        <ol>
          <DocumentPreview docInfo={docInfo} setPage={setPage}/>
        </ol>
      </div> : 
      <div>
        <DocumentPage docInfo={docInfo} tasksTree={tasksTree} setPage={setPage}/>
      </div>}
  </div>
}