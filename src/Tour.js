import React, { useState } from "react";

const Tour = ({ id, name, image, price, info, click }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="tour">
      <img className="tour-img" src={image} alt="" />
      <div className="tour-info">
        <div className="tour-header">
          <h3 className="tour-name">{name}</h3>
          <div className="tour-price">{price} $</div>
        </div>
        <p className="tour-desc">
          {readMore ? info : `${info.substring(0, 200)}`}
          <button onClick={() => setReadMore(!readMore)} className="btn-desc">
            {readMore ? `hide` : `read more`}
          </button>
        </p>
      </div>
      <button className="btn" onClick={() => click(id)}>
        not interested
      </button>
    </div>
  );
};

export default Tour;
