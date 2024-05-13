import React from 'react';


const Stringcheck=(data,value)=>{
  if(data.value==="String" || data.value==="Number"){
    {(newData.item=="String" ||newData.item==="Number")?newData.item:item}
  }
}

const Datamarkup = (newData, item, index, handleClick, handleChange) => (
  <>
    <input onChange={(e) => handleChange(e, item)} type="checkbox" name="" id="" />
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
