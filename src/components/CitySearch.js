import { useState, useEffect } from 'react';
import { InfoAlert } from './Alert';

const CitySearch = ({ allLocations, setCurrentCity }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [infoAlert, setInfoAlert] = useState('');

  useEffect(() => {
    setSuggestions(allLocations);
  }, [`${allLocations}`]);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    const filteredLocations = allLocations
      ? allLocations.filter((location) => {
          return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        })
      : [];

    setQuery(value);
    setSuggestions(filteredLocations);

    let infoText;
    if (filteredLocations.length === 0) {
      infoText =
        'We cannot find the city you are looking for. Please try another city';
    } else {
      infoText = '';
    }
    setInfoAlert(infoText);
  };

  const handleItemClicked = (event) => {
    const value = event.target.textContent;
    setQuery(value);
    setShowSuggestions(false);
    setCurrentCity(value);
    setInfoAlert('');
  };

  return (
    <div id="city-search">
      <div className="city-search-container">
        <label> Search for a city: </label>
        <div className="input-suggestions-wrapper">
          <input
            type="text"
            className="city"
            placeholder="Search for a city"
            value={query}
            onFocus={() => setShowSuggestions(true)}
            onChange={handleInputChanged}
          />

          {showSuggestions && (
            <ul className="suggestions">
              {suggestions.map((suggestion) => (
                <li onClick={handleItemClicked} key={suggestion}>
                  {suggestion}
                </li>
              ))}
              <li key="See all cities" onClick={handleItemClicked}>
                <b>See all cities</b>
              </li>
            </ul>
          )}
        </div>
      </div>
      {infoAlert && <InfoAlert text={infoAlert} />}
    </div>
  );
};

export default CitySearch;
