import { useState } from 'react';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <li>
      <div className="event">
        <h3>{event.summary}</h3>
        <p>{event.created}</p>
        <p>{event.location}</p>
      </div>
      {showDetails ? (
        <div className="eventDetails">
          <p>{event.description}</p>
        </div>
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
