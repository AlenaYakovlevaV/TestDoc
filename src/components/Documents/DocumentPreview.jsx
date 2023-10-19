import React from "react";
import { FunctionDate } from "../Functions/FunctionDate";


export const DocumentPreview = ({docInfo, setPage}) => {

  return (
    <li className="documents__item">
      <div>
        <div className="section__info">
            <span>{docInfo.author}, {docInfo.description}</span>
        </div>
        <div className="section__info">
            <span>{FunctionDate(new Date(docInfo.regDate))}</span>
        </div>
      </div>
      <div>
        <button className="btn__main" onClick={() => setPage(true)}>Открыть</button>
      </div>
    </li>
  )
}