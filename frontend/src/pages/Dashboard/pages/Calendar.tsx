import React, { useState, useEffect } from 'react';
import FullCalendar, { EventClickArg, DateSelectArg } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import styles from '../../../components';
import axios from 'axios';
import ConfirmDeletePopup from '../../../components/ConfirmDeletePopup';

interface Event {
  id: string;
  title: string;
  start: Date;
  end: Date;
}

const Calendar: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [showEventForm, setShowEventForm] = useState<boolean>(false);
  const [eventFormData, setEventFormData] = useState<{ title: string; description: string; type: string }>({
    title: '',
    description: '',
    type: '',
  });
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState<boolean>(false);
  const [deleteEventId, setDeleteEventId] = useState<string>('');

  const fetchEvents = async () => {
    try {
      const token = JSON.parse(localStorage.getItem('authUser') || '').token;

      const response = await axios.get<{ status: string; data: any[] }>('http://127.0.0.1:8000/api/events', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      const formattedEvents: Event[] = response.data.data.map((event) => ({
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

  const createEvent = async (title: string, start: Date, end: Date, description: string, type: string) => {
    try {
      const authUser = JSON.parse(localStorage.getItem('authUser') || '');
      const token = authUser.token;
      const createdBy = {
        name: authUser.name,
        username: authUser.username,
        email: authUser.email,
      };

      const response = await axios.post<{ status: string; data: any }>(
        'http://127.0.0.1:8000/api/events',
        {
          title,
          description,
          type,
          date: start.toISOString(),
          createdBy,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const newEvent: Event = {
        id: response.data.data._id,
        title: response.data.data.title,
        start: new Date(response.data.data.date),
        end: new Date(response.data.data.date),
      };

      setEvents([...events, newEvent]);
      setShowEventForm(false);
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  const deleteEvent = async (eventId: string) => {
    try {
      const token = JSON.parse(localStorage.getItem('authUser') || '').token;

      await axios.delete(`http://127.0.0.1:8000/api/events/${eventId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setEvents(events.filter((event) => event.id !== eventId));
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };
  const handleEventDelete = (eventId: string) => {
    setDeleteEventId(eventId);
    setShowDeleteConfirmation(true);
  };

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
        select={(selectionInfo: DateSelectArg) => {
          setShowEventForm(true);
          setEventFormData({ ...eventFormData, start: selectionInfo.start, end: selectionInfo.end });
        }}
        eventClick={(eventInfo: EventClickArg) => handleEventDelete(eventInfo.event.id)}
        eventChange={(eventInfo) => {}}
      />
      {showEventForm && <CreateEventPopup onSubmit={handleEventFormSubmit} onCancel={() => setShowEventForm(false)} />}
      {showDeleteConfirmation && (
        <ConfirmDeletePopup
          onDeleteConfirm={() => {
            deleteEvent(deleteEventId);
            setShowDeleteConfirmation(false);
          }}
          onCancel={() => setShowDeleteConfirmation(false)}
        />
      )}
    </section>
  );
};

export default Calendar;

interface CreateEventPopupProps {
  onSubmit: (title: string, description: string, type: string) => void;
  onCancel: () => void;
}

const CreateEventPopup: React.FC<CreateEventPopupProps> = ({ onSubmit, onCancel }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(title, description, type);
    setTitle('');
    setDescription('');
    setType('');
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 z-10">
      <div className="bg-white p-8 rounded-lg relative">
        <h2 className="text-2xl font-bold mb-4">Create Event</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 w-[350px] max-w-[400px] gap-6">
          <InputField type="text" placeholder="Enter title" name="title" label="Title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
          <InputField
            type="text"
            placeholder="Enter description"
            name="description"
            label="Description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <InputField type="text" placeholder="Enter type" name="type" label="Type" id="type" value={type} onChange={(e) => setType(e.target.value)} />
          <div className="flex justify-end">
            <button type="button" className="bg-gray-400 text-gray-800 py-2 px-4 rounded mr-2 hover:bg-gray-500 transition-all duration-200" onClick={onCancel}>
              Cancel
            </button>
            <button type="submit" className="bg-secondary text-white py-2 px-4 rounded hover:bg-dark transition-all duration-200">
              Create Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const InputField: React.FC<InputFieldProps> = ({ type, placeholder, name, value, onChange, label, id, disabled = false }) => {
  return (
    <label className="flex flex-col">
      <span className="text-slate-600 mb-[1px]">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        id={id}
        className={`p-3 rounded-md bg-slate-200 outline-none text-dark w-full`}
        disabled={disabled}
      />
    </label>
  );
};
