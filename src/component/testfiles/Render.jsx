import React from 'react';


const Datamarkup = (newData, item, index, handleClick, handleChange) => (
  <>
    <input onChange={(e) => handleChange(e, (typeof newData[item] === "string" || typeof newData[item] === "number") ? newData[item] : item)} type="checkbox" />
    <label onClick={() => handleClick(item)}>
      {(typeof newData[item] === "string" || typeof newData[item] === "number") ? newData[item] : item}
    </label>
  </>
);


export const Render = ({ newData, handleClick, handleChange }) => {
  return (
    <div className="container">
      {Array.isArray(newData) ? newData.map((item, index) => (
        <div key={index}>
          {Datamarkup(newData,item,index,handleClick,handleChange)}
        </div>
      )) : Object.keys(newData).map((item, index) => (
        <div key={item}>
          {Datamarkup(newData,item,index,handleClick,handleChange)}
        </div>
      ))}
    </div>
  );
};
