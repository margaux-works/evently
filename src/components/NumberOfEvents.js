/* eslint-disable jsx-a11y/no-redundant-roles */
import { useState } from 'react';

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const [number, setNumber] = useState(32); // default to 32 events

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setNumber(value);
    const numericValue = Number(value);

    if (isNaN(numericValue) || numericValue <= 0) {
      setErrorAlert('Oops: Please enter a valid number'); // Set an error message if the value is invalid
    } else {
      setErrorAlert(''); // Clear any previous error
      setCurrentNOE(numericValue); // Update the number of events
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
