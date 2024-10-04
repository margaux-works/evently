/* eslint-disable jsx-a11y/no-redundant-roles */
import { useState } from 'react';
import { ErrorAlert } from './Alert';

const NumberOfEvents = ({ currentNOE, setCurrentNOE }) => {
  const [number, setNumber] = useState(currentNOE);
  const [errorAlert, setErrorAlert] = useState('');

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setNumber(value);
    const numericValue = Number(value);

    let alertText;
    if (isNaN(value) || numericValue <= 0) {
      alertText = 'Please enter a valid number.';
      setErrorAlert(alertText);
    } else {
      setErrorAlert('');
      setCurrentNOE(value);
    }
  };

  return (
    <div id="number-of-events">
      <label htmlFor="number-of-events-input">Number of Events: </label>
      <input
        type="number"
        id="number-of-events-input"
        role="textbox"
        className="number-of-events-input"
        value={number}
        onChange={handleInputChanged}
        data-testid="number-of-events-input"
      />
      {errorAlert && <ErrorAlert text={errorAlert} />}
    </div>
  );
};

export default NumberOfEvents;
