import React from 'react';
// import Breadcrumb from './component/Breadcrum/Breadcrumb';
import { Listing } from './component/testfiles/Test';
import { data } from './data';
import "./App.css"


// const data = {
//   music: {
//     hello: "Hello",
//     "see you again": "See you again",
//     arijit: ["Tum Hi Ho", "Kya Chahiye", "Hai Dil Ye Mera", "Kya Chahiye", "Shayad"],
//     atif: ["Adat", "Wo Lamhe", "Tu Jane Na"]
//   },
//   documents: {
//     "document1": "Document 1",
//     "document2": "Document 2",
//     "document3": "Document 3",
//     "document4": "Document 4",
//     "document5": "Document 5"
//   },
//   videos: {
//     "video1": "Video 1",
//     "video2": "Video 2",
//     "video3": "Video 3",
//     "video4": "Video 4",
//     "video5": "Video 5"
//   },
// };

function App() {
  return (
    <div className="App">
     <h2>Breadcrum Assignment</h2>
      <Listing data={data}/>
    </div>
  );
}

export default App;

// import './App.css';
// import PassageHighlighter from './component/PassageHighlighter';

// function App() {
//   const passage = "This is a sample passage. It contains some words to be highlighted.";
//   return (
//     <div className="App">
//        <h1>Passage Highlighter</h1>
//       <PassageHighlighter passage={passage} />
//     </div>
//   );
// }

// export default App;
