import React from 'react';

const MyComponent = () => {
  return (
    <div style={{ backgroundColor: 'lightgreen', padding: '20px', width: '300px', borderRadius: '10px' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <img src="icon.png" alt="icon" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
        <span>Where have you seen this item?</span>
      </div>
      <input type="text" placeholder="Type here..." style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '5px', border: '1px solid #ccc' }} />
      <button style={{ backgroundColor: 'green', color: 'white', padding: '10px', width: '100%', borderRadius: '5px', border: 'none' }}>Submit</button>
    </div>
  );
};

export default MyComponent;
