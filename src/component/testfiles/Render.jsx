import React from 'react';


const Stringcheck=(data,value)=>{
  if(data.value==="String" || data.value==="Number"){
    
  }
}

const Datamarkup=(item,index,handleClick,handleChange)=>{
return <>
<input onChange={(e) => handleChange(e, item)} type="checkbox" name="" id="" />
<label onClick={() => handleClick(item)} htmlFor="">{item}</label></>
}

export const Render = ({ newData, handleClick, handleChange }) => {
  return (
    <div className="container">
      {Array.isArray(newData) ? newData.map((item, index) => (
        <div key={index}>
          {Datamarkup(item,index,handleClick,handleChange)}
        </div>
      )) : Object.keys(newData).map((item, index) => (
        <div key={item}>
          {Datamarkup(item,index,handleClick,handleChange)}
        </div>
      ))}
    </div>
  );
};
