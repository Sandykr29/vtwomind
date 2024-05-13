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
    <table className="container">
     <thead>
  <tr>
    <th>Folder</th>
    <th>Size</th>
    <th>Date</th>
  </tr>
</thead>
<tbody>
  {Array.isArray(newData) ? newData.map((item, index) => (
  <tr key={index} >
    <td>{Datamarkup(newData,item,index,handleClick,handleChange)}</td>
    <td>5KB</td>
    <td>12 May 2024</td>
  </tr>
)) : Object.keys(newData).map((item, index) => (
  <tr key={item} >
    <td>{Datamarkup(newData,item,index,handleClick,handleChange)}</td>
    <td>5KB</td>
    <td>13 May 2024</td>
  </tr>
))}
</tbody>
    </table>
  );
};

{/* <table>
<thead>
  <tr>
    <th>Folder</th>
    <th>Size</th>
    <th>Date</th>
  </tr>
</thead>
<tbody>
  {Array.isArray(newData) ? newData.map((item, index) => (
  <tr key={index}>
    <td>{Datamarkup(newData,item,index,handleClick,handleChange)}</td>
    <td>5KB</td>
    <td>12 May 2024</td>
  </tr>
)) : Object.keys(newData).map((item, index) => (
  <tr key={item}>
    <td>{Datamarkup(newData,item,index,handleClick,handleChange)}</td>
    <td>5KB</td>
    <td>13 May 2024</td>
  </tr>
))}
</tbody>
</table> */}
