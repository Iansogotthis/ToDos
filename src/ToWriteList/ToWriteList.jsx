import React from 'react'; 
import ToWriteListItem from "../ToWriteListItem/ToWriteListItem"; 

export default function ToWriteList({ toWrites = [] }) { // Provide a default value for toWrites
  const steps = ["practice", "project", "prioritize"];
  
  const toWriteItems = toWrites.map(function(toWrite, index) {
    return (
      <div key={index}>
        <input type="text" placeholder="Enter text..." key={`input-${index}`} />
        <ToWriteListItem toWrite={`${index + 1}. ${toWrite}`} steps={steps} />
      </div>
    );
  });

  return (
    <div className="storyCard">
      <ul>
        {toWriteItems}
      </ul>
    </div>
  );
}