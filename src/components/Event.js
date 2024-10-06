import { useState } from 'react';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <li className="event">
      <h3>{event.summary}</h3>
      <p>{event.created}</p>
      <p id="location">{event.location}</p>

      {showDetails ? (
        <>
          <div className="line"></div>{' '}
          <p className="eventDetails">{event.description}</p>
        </>
      ) : null}
      <button
        className="showDetailsBtn"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
    </li>
  );
};

export default Event;
