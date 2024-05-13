import React, { useState } from "react";
import { Render } from "./Render";
import "./Test.css"

export const Listing = ({ data }) => {

  // data which is being sent to Render component 
  const [newData, setNewData] = useState(data);
  const [selected, setSelected] = useState(["home"]);
  const [chosen, setChosen] = useState([]);
  const [remove,setRemove]=useState([]);


// function to remove all the checked value from selected div(bottom div)
  const handleFilter=()=>{
    setChosen((prevChosen) => prevChosen.filter((item) => !remove.includes(item)))
    setRemove([]);
  }


  // function to select  values that we want to delete from the lower-div
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

  // function to select values from main data div 
  const clickbutton = (index) => {
    const lastItem = selected[index];
    const newDataFromLastItem = getDataFromSelected(data, selected, index);
    setNewData(newDataFromLastItem);
    setSelected(selected.slice(0, index + 1));
  };


  // function to give filtered data through breadcrumb 
  const getDataFromSelected = (data, selected, index) => {
    let newData = data;
    for (let i = 1; i <= index; i++) {
      const currentItem = selected[i];
      newData = newData[currentItem.replace("> ", "")];
    }
    return newData;
  };


  // logic to put selected data from main data to selected useState's array
  const handleClick = (item) => {
    if (Array.isArray(newData[item])) {
      setNewData(newData[item]);
      setSelected((p) => [...p, item]);
    } else if (typeof newData[item] === "object") {
      setNewData(newData[item]);
      setSelected((p) => [...p,item]);
    }
  };


  // logic to select file through main data div, this is passed to Render component
  const handleChange = (e, item) => {
  
    if (e.target.checked) {
      setChosen((prevChosen) => [...prevChosen, item]);
    } else {
      setChosen((prevChosen) => prevChosen.filter((value) => value !== item));
    }
  };

  return (
    <div className="outer-div">

      {/* breadcrumb section  */}
      {selected?.map((item, index) => (
        <div className="btn" key={item} onClick={() => clickbutton(index)}>
          {item}
        </div>
      ))}
      <br />

      {/* main data rendering  */}
      <Render newData={newData} handleClick={handleClick} handleChange={handleChange} />
      <hr />

      {/* selection div  */}
      <div className="chosen">

        {/* logic to conditionally rendering the remove selected button  */}
        {remove.length>0 && <div className="warning-removal">
       <p>Remove all selected items</p>
        <button onClick={handleFilter}>Remove selected</button>
        </div>}

        {/* showing list of items selected from the main div  */}
        <h3>Selected Items↓</h3>
        {chosen?.map((item, index) => (
          <div className="bottom-div" key={item}>
            <label><input  onChange={handlePlay} type="checkbox" value={item}  />
            <span>{selected.join("/")}/{item}</span></label>        
          </div>
        ))}
      </div> 
    </div>
  );
};
