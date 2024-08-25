import React from 'react';

interface EventProps {
  event: {
    name: string;
    description: string;
    date: string;
    time: string;
    venue: string;
    imageUrl: string;
    registrationLink: string;
    clubLogoUrl: string;
  };
}

const EventComponent: React.FC<EventProps> = ({ event }) => {
  return (
    <div className="flex gap-4 mb-8 mx-20 ml-48 mr-32 ">
      <div className="flex-shrink-0">
        <img
          src={event.imageUrl}
          alt={event.name}
          className="w-48 h-48 rounded-xl object-cover"
        />
      </div>
      <div className=" bg-purple-950 bg-opacity-35 p-4 border-2 border-white rounded-xl flex-grow ">
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-semibold text-white">{event.name}</h2>
          <img src={event.clubLogoUrl} alt="Club Logo" className="h-8" />
        </div>
        <p className="text-neutral-400 my-4">{event.description}</p>
        <div className="text-blue-400 mb-4">
          <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
            Registration Form
          </a>
        </div>
        <div className="flex justify-between text-neutral-500 text-sm">
          <div>
            <span role="img" aria-label="Calendar">
              📅
            </span>{' '}
            {event.date}
          </div>
          <div>
            <span role="img" aria-label="Clock">
              ⏰
            </span>{' '}
            {event.time}
          </div>
          <div>
            <span role="img" aria-label="Location">
              📍
            </span>{' '}
            {event.venue}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventComponent;
