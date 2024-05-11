import React, { useState } from 'react';

import "./PassageHighlighter.css";

const PassageHighlighter = ({ passage }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  
  const highlightWords = (text, searchTerm) => {
    if (!searchTerm.trim()) return text;
    const regex = new RegExp(`\\b${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
    return text.replace(regex, (match) => `<span class="highlight">${match}</span>`);
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search for a word" 
        value={searchTerm} 
        onChange={handleSearchChange} 
      />
      <div dangerouslySetInnerHTML={{ __html: highlightWords(passage, searchTerm) }} />
    </div>
  );
};

export default PassageHighlighter;


// import React, { useState } from 'react';
// import "./PassageHighlighter.css"

// const PassageHighlighter = ({ passage }) => {
//   const [searchTerm, setSearchTerm] = useState('');
  
//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };
  
//   const highlightWords = (text, searchTerm) => {
//     if (!searchTerm.trim()) return text;
//     const regex = new RegExp(`\\b${searchTerm}\\b`, 'gi');
//     return text.replace(regex, (match) => `<span class="highlight">${match}</span>`);
//   };

//   return (
//     <div className='div'>
//       <input 
//         type="text" 
//         placeholder="Search for a word" 
//         value={searchTerm} 
//         onChange={handleSearchChange} 
//       />
//       <div dangerouslySetInnerHTML={{ __html: highlightWords(passage, searchTerm) }} />
//     </div>
//   );
// };

// export default PassageHighlighter;
