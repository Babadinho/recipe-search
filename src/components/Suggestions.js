import React from 'react';

const Suggestions = () => {
  return (
    <div>
      {suggestions.length === 0 ? null : (
        <ul>
          {suggestions.map((item, index) => (
            <li key={index} onClick={() => this.selectedText(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Suggestions;
