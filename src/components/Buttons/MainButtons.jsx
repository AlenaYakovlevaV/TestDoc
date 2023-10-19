import React from "react";

export const MainButtons = ({setVisible}) => {
  function pagePrint() {
    window.print();
  }
  return <div className="btn-area">
    <div>
      <button onClick={() => setVisible(true)} className="btn__main btn-action btn-unwrap">+</button>
      <button onClick={() => setVisible(false)} className="btn__main btn-action">-</button>
    </div>
    <button onClick={pagePrint} className="btn__main btn-print">Print</button>
  </div>
}