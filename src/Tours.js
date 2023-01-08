import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, click }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div className="tour-container">
        {tours.map((elem, idx) => {
          return <Tour click={click} key={elem.id} {...elem} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
