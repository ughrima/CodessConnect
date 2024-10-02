import React, { useState, useEffect } from 'react';
import './Calendar.css'; // Import your CSS file here

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showEventForm, setShowEventForm] = useState(false);
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  

  useEffect(() => {
    initializeCalendar();
  }, [currentDate, events]);

  const initializeCalendar = () => {
    const daysContainer = document.querySelector('.days');
    if (!daysContainer) return;

    daysContainer.innerHTML = '';
    const monthDays = daysContainer;
    const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const prevLastDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    const firstDayIndex = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const lastDayIndex = new Date(currentDate.getFullYear(), currentDate.getMonth(), lastDay).getDay();

    // Days of the previous month
    for (let i = firstDayIndex; i > 0; i--) {
      const day = document.createElement('div');
      day.classList.add('day', 'prev-date');
      day.innerText = prevLastDay - i + 1;
      monthDays.appendChild(day);
    }

    // Days of the current month
    for (let i = 1; i <= lastDay; i++) {
      const day = document.createElement('div');
      day.classList.add('day');
      if (events.some(event => new Date(event.date).toDateString() === new Date(currentDate.getFullYear(), currentDate.getMonth(), i).toDateString())) {
        day.classList.add('event-date');
      }
      day.innerText = i;
      if (i === new Date().getDate() && currentDate.getMonth() === new Date().getMonth() && currentDate.getFullYear() === new Date().getFullYear()) {
        day.classList.add('today');
      }
      day.addEventListener('click', () => handleDayClick(i));
      monthDays.appendChild(day);
    }

    // Days of the next month
    for (let i = lastDayIndex; i < 6; i++) {
      const day = document.createElement('div');
      day.classList.add('day', 'next-date');
      day.innerText = i - lastDayIndex + 1;
      monthDays.appendChild(day);
    }
  };

  const handlePrevMonth = () => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  const handleToday = () => {
    setCurrentDate(new Date());
  };

  const handleDayClick = (day) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(date);
    setShowEventForm(true); // Show event form when a day is selected
    
   

  };

  const toggleEventForm = () => {
    setShowEventForm(!showEventForm);
    
    
  };

  const addEvent = () => {
    const eventName = document.querySelector('.event-name').value;
    const mentorName = document.querySelector('.mentor-name').value;
    const eventTimeFrom = document.querySelector('.event-time-from').value;
    const eventTimeTo = document.querySelector('.event-time-to').value;

    if (eventName && mentorName && eventTimeFrom && eventTimeTo && selectedDate) {
      setEvents([...events, { name: eventName, timeFrom: eventTimeFrom, timeTo: eventTimeTo, date: selectedDate }]);
      setShowEventForm(false); // Hide event form after adding the event
      const selectedDayElement = document.querySelector('.selected-day');
      if (selectedDayElement) {
        selectedDayElement.classList.remove('selected-day');
      }
      
    }
  };

  const handleDateInput = () => {
    const dateInput = document.querySelector('.date-input').value;
    const [month, year] = dateInput.split('/');
    if (month && year) {
      const newDate = new Date(parseInt(year), parseInt(month) - 1);
      setCurrentDate(newDate);
    }
  };

  return (
    <div className="container">
      <div className="left">
        <div className="calendar">
          <div className="month">
            <i className="fas fa-angle-left prev" onClick={handlePrevMonth}>&lt;</i>
            <div className="date">
              {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
            </div>
            <i className="fas fa-angle-right next" onClick={handleNextMonth}>&gt;</i>
          </div>
          <div className="weekdays">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>
          <div className="days"></div>
          <div className="goto-today">
            <div className="goto">
              <input type="text" placeholder="mm/yyyy" className="date-input" />
              <button className="goto-btn" onClick={handleDateInput}>Go</button>
            </div>
            <button className="today-btn" onClick={handleToday}>Today</button>
          </div>
        </div>
      </div>
      <div className="right">
        {selectedDate && (
          <div className="today-date">
            <div className="event-day">{selectedDate.toLocaleDateString('en-GB', { weekday: 'short' })}</div>
            <div className="event-date">{selectedDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</div>
          </div>
        )}
        <div className="events">
          {events.filter(event => new Date(event.date).toDateString() === selectedDate?.toDateString()).map((event, index) => (
            <div key={index} className="event">
              <div className="title">
                <i className="fas fa-calendar-day"></i>
                <div className="event-title">{event.name}</div>
              </div>
              <div className="event-time">
                {event.timeFrom} - {event.timeTo}
              </div>
            </div>
          ))}
          {events.filter(event => new Date(event.date).toDateString() === selectedDate?.toDateString()).length === 0 && (
            <div className="no-event">No events for this day</div>
          )}
        </div>
        {showEventForm && (
          <div className="add-event-wrapper active">
            <div className="add-event-header">
              <div className="title">Add Event</div>
              <i className="fas fa-times close" onClick={toggleEventForm}></i>
            </div>
            <div className="add-event-body">
              <div className="add-event-input">
                <input type="text" placeholder="Event Name " className="event-name" />
              </div>
              <div className="add-event-input">
                <input type="text" placeholder="Mentor Name" className="mentor-name" />
              </div>
              <div className="add-event-input">
                <input type="text" placeholder="Event Time From" className="event-time-from" />
              </div>
              <div className="add-event-input">
                <input type="text" placeholder="Event Time To" className="event-time-to" />
              </div>
            </div>
            <div className="add-event-footer">
              <button className="add-event-btn" onClick={addEvent}>Add Event</button>
            </div>
          </div>
        )}
        <button className="add-event" onClick={toggleEventForm}>
          <i className="fas fa-plus"><span style={{ color: '#b3b3b3', transform: 'scale(10)' }}></span> &#43; </i>
        </button>
      </div>
    </div>
    
  );
};

export default Calendar;
