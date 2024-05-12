import React from 'react';

export const Render = ({ newData, handleClick, handleChange }) => {
  return (
    <div className="container">
      {Array.isArray(newData) ? newData.map((item, index) => (
        <div key={index}>
          <input onChange={(e) => handleChange(e, item)} type="checkbox" name="" id="" />
          <label onClick={() => handleClick(item)} htmlFor="">{item}</label>
        </div>
      )) : Object.keys(newData).map((item, _) => (
        <div key={item}>
          <input onChange={(e) => handleChange(e, item)} type="checkbox" name="" id="" />
          <label onChange={(e) => handleChange(e, item)} onClick={() => handleClick(item)} htmlFor="">{item}</label>
        </div>
      ))}
    </div>
  );
};



// import React from 'react'

// export const Render = ({newData,handleClick,handleChange}) => {
//   return (
   
//          <div className="container">
//         {Array.isArray(newData)?newData.map((item,index)=>{
//             return <div key={index}>
//                 <input onChange={handleChange}  type="checkbox" name="" id="" />
//                 <label onClick={()=>handleClick(item)} htmlFor="">{item}</label>
//             </div>
//         })
//         :Object.keys(newData).map((item,_)=><div key={item}><input type="checkbox" name="" id="" />
//         <label onChange={handleChange}  onClick={()=>handleClick(item)} htmlFor="">{item}</label></div>)}
//         </div>
 
//   )
// }
