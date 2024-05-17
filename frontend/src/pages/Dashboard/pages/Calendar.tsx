import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import styles from '../../../components';
import axios from 'axios';

const Calendar = () => {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const token = JSON.parse(localStorage.getItem('authUser')).token;

      const response = await axios.get('http://127.0.0.1:8000/api/events', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      const formattedEvents = response.data.data.map((event) => ({
        id: event._id,
        title: event.title,
        start: new Date(event.date),
        end: new Date(event.date),
      }));

      setEvents(formattedEvents);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <section className={styles.dashboardSection}>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        initialView={'dayGridMonth'}
        headerToolbar={{
          start: 'prev,today,next',
          center: 'title',
          end: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        height="85vh"
        events={events}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        eventClick={(eventInfo) => {
          if (window.confirm(`Are you sure you want to remove the event '${eventInfo.event.title}'?`)) {
          }
        }}
        select={(selectionInfo) => {
          const title = prompt('Please enter a title for your event:');
          if (title) {
          }
        }}
        eventChange={(eventInfo) => {}}
      />
    </section>
  );
};

export default Calendar;
