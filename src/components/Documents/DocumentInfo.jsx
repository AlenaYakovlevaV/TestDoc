import React from "react";
import { FunctionDate } from "../Functions/FunctionDate";

export const DocumentInfo = ({docInfo}) => {
  return (
    <>
      <div className="document__info">
        <div>
          <span className="document__title">Автор документа: </span>
          <span className="document__value">{docInfo.author}</span>
        </div>
        <div>
          <span className="document__title">Название документа: </span>
          <span className="document__value">{docInfo.description}</span>
        </div>
        <div>
          <span className="document__title">Дата создания: </span>
          <span className="document__value">{FunctionDate(new Date(docInfo.regDate))}</span>
        </div>
      </div>
    </>
  )
}