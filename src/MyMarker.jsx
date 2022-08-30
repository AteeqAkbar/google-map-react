import React from "react";

const MyMarker = ({ text, tooltip, $hover, url, onclicks }) => {
  const handleClick = () => {
    console.log(`You clicked on ${tooltip} url${url}`);
    onclicks(url);
  };

  return (
    <div className={$hover ? "circle hover" : "circle"} onClick={handleClick}>
      <span className="circleText" title={tooltip}>
        {text}
      </span>
    </div>
  );
};

export default MyMarker;
