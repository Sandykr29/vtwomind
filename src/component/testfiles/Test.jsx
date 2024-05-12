import React, { useState } from "react";
import { Render } from "./Render";
import "./Test.css"

export const Listing = ({ data }) => {
  const [newData, setNewData] = useState(data);
  const [selected, setSelected] = useState(["home"]);
  const [chosen, setChosen] = useState([]);
  const [remove,setRemove]=useState([]);

  const handleFilter=()=>{
    setChosen((prevChosen) => prevChosen.filter((item) => !remove.includes(item)))
    setRemove([]);
  }

  const handlePlay = (e) => {
    const value = e.target.value;
    setRemove((prevRemove) => {
      if (prevRemove.includes(value)) {
        return prevRemove.filter((item) => item !== value);
      } else {
        return [...prevRemove, value];
      }
    });
  };

  const clickbutton = (index) => {
    const lastItem = selected[index];
    const newDataFromLastItem = getDataFromSelected(data, selected, index);
    setNewData(newDataFromLastItem);
    setSelected(selected.slice(0, index + 1));
  };

  const getDataFromSelected = (data, selected, index) => {
    let newData = data;
    for (let i = 1; i <= index; i++) {
      const currentItem = selected[i];
      newData = newData[currentItem.replace("> ", "")];
    }
    return newData;
  };

  const handleClick = (item) => {
    if (Array.isArray(newData[item])) {
      setNewData(newData[item]);
      setSelected((p) => [...p, `> ${item}`]);
    } else if (typeof newData[item] === "object") {
      setNewData(newData[item]);
      setSelected((p) => [...p, `> ${item}`]);
    }
  };

  const handleChange = (e, item) => {
    if (e.target.checked) {
      setChosen((prevChosen) => [...prevChosen, item]);
    } else {
      setChosen((prevChosen) => prevChosen.filter((value) => value !== item));
    }
  };

  return (
    <div className="outer-div">
      {selected?.map((item, index) => (
        <div className="btn" key={item} onClick={() => clickbutton(index)}>
          {item}
        </div>
      ))}
      <br />
      <Render newData={newData} handleClick={handleClick} handleChange={handleChange} />
      <hr />

      <div className="chosen">
        {remove.length>0 && <div className="warning-removal">
<p>Remove all selected items</p>
<button onClick={handleFilter}>Remove selected</button>
        </div>}
   {/* {remove.length>0 &&<button onClick={handleFilter}>Remove selected</button>} */}
        <h3>Selected Items↓</h3>
        {chosen?.map((item, index) => (
          <div className="bottom-div" key={item}>
            <input  onChange={handlePlay} type="checkbox" value={item}  />
            <label>{item}</label>
            
          </div>
        ))}

      </div>
    </div>
  );
};
