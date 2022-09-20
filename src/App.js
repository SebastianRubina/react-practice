import React, { useState } from 'react'
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';
import './App.css'; 
import NewEventForm from './components/NewEventForm';

function App() {

  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([])

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event]
    })
    handleClose();
  }

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return event.id !== id;
      })
    }); 
  }

  const handleClose = () => {
    setShowModal(false);
  }

  return (
    <div className="App">
      <Title title="Mario Kingdom Events" subtitle="All the events in Marioland!"/>

      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide Events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show Events</button>
        </div>
      )}
      {showEvents && <EventList events={events} handleClick={handleClick} />}
      <div>
        <button onClick={() => setShowModal(true)}>Add New Event</button>
      </div>
      {showModal && (
        <Modal handleClose={handleClose} isSalesModal={false}>
          <NewEventForm addEvent={addEvent} />
        </Modal>
      )}
    </div>
  );
}

export default App;
