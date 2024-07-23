// src/App.js
import React, { useState } from 'react';
import FloatingDropdown from './FloatingDropdown';
const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

function App() {
  const [selectedOption, setSelectedOption] = useState('')
  const handleSelect = (option) => {
    console.log('Selected option:', option);
    setSelectedOption(option)
  };
  const onClose = () => {
    setSelectedOption('');
  }

  return (
    <div style={{
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      padding: '10px'
    }}>
      <FloatingDropdown
        options={options}
        onSelect={handleSelect}
        label={"City"}
        selectedValue={selectedOption}
        onClose={onClose}
        selectionColor={'#f0f0f0'}
        dropdownStyle={{
          width: '90px',
          borderColor: '#f0f0ff',
          borderRadius: '10px',
        }}
        menuStyle={{
          borderColor: '#f0f0ff',
          borderRadius: '10px',
          width: '110px',
        }}
        menuItemStyle={{
          borderRadius: '5px',
          transition: 'background-color 0.3s ease',
        }}
      />
    </div>
  );
}

export default App;
