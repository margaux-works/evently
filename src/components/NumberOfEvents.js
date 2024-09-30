/* eslint-disable jsx-a11y/no-redundant-roles */
import { useState } from 'react';

const NumberOfEvents = ({ currentNOE, setCurrentNOE, setErrorAlert }) => {
  const [number, setNumber] = useState(currentNOE); // default to 32 events

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setNumber(value);
    const numericValue = Number(value);

    if (isNaN(value) || numericValue <= 0) {
      setErrorAlert('Oops: Please enter a valid number');
    } else {
      setErrorAlert('');
      setCurrentNOE(value);
    }
  };

  return (
    <div id="number-of-events">
      <label htmlFor="number-of-events-input">Number of Events:</label>
      <input
        type="number"
        id="number-of-events-input"
        role="textbox"
        className="number-of-events-input"
        value={number}
        onChange={handleInputChanged}
        data-testid="number-of-events-input"
      />
    </div>
  );
};

export default NumberOfEvents;
