import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Button, Paper, Stack } from "@mui/material";
import { formatDate } from "@fullcalendar/core";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import "./calender.css";

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

function renderSidebarEvent(event) {
  return (
    <li key={event.id}>
      <b>
        {formatDate(event.start, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </b>
      <i>{event.title}</i>
    </li>
  );
}

function createEventId() {
  return String(Date.now());
}

const Calendar = () => {
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [isSaving, setIsSaving] = useState(false);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('userData');

    if (storedData) {
      const loadedRows = JSON.parse(storedData);
      setCurrentEvents(loadedRows);
      setRows(loadedRows);
    }
  }, []);

  const handleDateSelect = (selectInfo) => {
    let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      const newEvent = {
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      };

      // Update both state variables
      setCurrentEvents([...currentEvents, newEvent]);
      setRows([...rows, newEvent]);
    }
  };

  const handleEventClick = (clickInfo) => {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      // Remove the clicked event from state
      const updatedEvents = currentEvents.filter(
        (event) => event.id !== clickInfo.event.id
      );

      setCurrentEvents(updatedEvents);

      // Remove the clicked event from rows state
      const updatedRows = rows.filter((event) => event.id !== clickInfo.event.id);
      setRows(updatedRows);
    }
  };

  const handleSaveData = () => {
    setIsSaving(true);

    localStorage.setItem('userData', JSON.stringify(currentEvents));

    setIsSaving(false);
    alert('Data saved successfully!');
  };
  const handleClearData = () => {
    setIsSaving(true);

    // Clear the data in localStorage
    localStorage.removeItem('userData');

    // Clear the data in state
    setCurrentEvents([]);
    setRows([]);

    setIsSaving(false);
    alert('Data cleared successfully!');
  };

  return (
    <Stack direction={"row"}>
      <Paper className="demo-app-sidebar">
        <h2 style={{ textAlign: "center" }}>
          All Events ({currentEvents.length})
        </h2>
        <ul>{currentEvents.map(renderSidebarEvent)}</ul>
      </Paper>

      <div className="demo-app-main">
        {/* Add a "Save" button */}
        <Button
          variant="contained"
          color="primary"
          onClick={handleSaveData}
          disabled={isSaving}
        >
          {isSaving ? 'Saving...' : 'Save Data'}
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleClearData}
          disabled={isSaving}
        >
          {isSaving ? 'Clearing...' : 'Clear Data'}
        </Button>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={weekendsVisible}
          select={handleDateSelect}
          eventContent={renderEventContent}
          eventClick={handleEventClick}
          events={currentEvents} // Pass events directly to FullCalendar
        />
      </div>
    </Stack>
  );
};

export default Calendar;
