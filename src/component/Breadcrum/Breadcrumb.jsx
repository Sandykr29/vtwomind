import React, { useState } from 'react';
import './Breadcrumb.css';

const Breadcrumb = ({ data }) => {
  const [clickedData, setClickedData] = useState(data);
  const [selectedItems, setSelectedItems] = useState([]);
  const [breadcrumbTrail, setBreadcrumbTrail] = useState(['Home']); 

  const handleClick = (key, value) => {
    setBreadcrumbTrail([...breadcrumbTrail, key]);
    if (Array.isArray(value)) {
      setSelectedItems(value);
    } else if (typeof value === 'object' && value !== null) {
      setClickedData(value);
    }
  };

  const handleCheckboxChange = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleRemoveItem = (item) => {
    setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
  };

  const handleBreadcrumbClick = (index) => {
    const trail = breadcrumbTrail.slice(0, index + 1);
    let targetData = data;
    for (const key of trail.slice(1)) { 
      targetData = targetData[key];
    }
    setClickedData(targetData);
    setBreadcrumbTrail(trail);
  };

  return (
    <div className="breadcrumb-container">
                          <div className="breadcrumb-trail">
                            {breadcrumbTrail.map((crumb, index) => (
                              <div key={index} onClick={() => handleBreadcrumbClick(index)}>
                                {crumb}
                              </div>
                            ))}
                          </div>

                         <div className="breadcrumb-items">
                          {Array.isArray(clickedData)
                            ? clickedData.map((item, index) => (
                                <div key={index} className="breadcrumb-item" onClick={() => handleClick(item, null)}>
                                  <input
                                    type="checkbox"
                                    checked={selectedItems.includes(item)}
                                    onChange={() => handleCheckboxChange(item)}
                                  />
                                  <label>{item}</label>
                                </div>
                              ))
                            : Object.keys(clickedData || {}).map((key) => (
                                <div
                                  key={key}
                                  className="breadcrumb-item"
                                  onClick={() => handleClick(key, clickedData ? clickedData[key] : data[key])}
                                >
                                  <input
                                    type="checkbox"
                                    checked={selectedItems.includes(clickedData ? clickedData[key] : data[key])}
                                    onChange={() => handleCheckboxChange(clickedData ? clickedData[key] : data[key])}
                                  />
                                  <label>{key}</label>
                                </div>
                              ))}
                          </div>

      
                            <div className="selected-items">
                              <h2>Selected Items</h2>
                              {selectedItems.map((item, index) => (
                                <div key={index} className="selected-item">
                                  {typeof item === 'object' && item !== null ? Object.values(item).join(', ') : item}
                                  <button onClick={() => handleRemoveItem(item)}>Remove</button>
                                </div>
                              ))}
                            </div>
    </div>
  );
};

export default Breadcrumb;
