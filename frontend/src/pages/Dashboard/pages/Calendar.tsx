import React from 'react';
import Fullcalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import styles from '../../../components';

const Calendar = () => {
  return (
    <section className={styles.dashboardSection}>
      <Fullcalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        initialView={'dayGridMonth'}
        headerToolbar={{
          start: 'prev,today,next',
          center: 'title',
          end: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        height="85vh"
      />
    </section>
  );
};

export default Calendar;
