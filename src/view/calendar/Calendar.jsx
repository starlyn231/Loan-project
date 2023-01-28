import { useLayoutEffect, useRef, useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { Box } from "@mui/material";
import { useEffect } from "preact/hooks";
import ImgCalendar from "../../assets/image/MainCalendarImage.png";
function renderEventContent(eventInfo) {
  return (
    <div
      style={{
        flexDirection: 'column',

        margin: "auto",
        alignItems: "center",
        display: "flex",
        width: '100%',
        height: '80px'
      }}
    >
      <p>{eventInfo.event.title}</p>
      <img
        style={{ width: "40px" }}
        className='eventimage'
        src={eventInfo.event.url}
      />
    </div>
  );
}

export const Calendar = () => {
  //const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [isMonthlyViewEnabled, setIsMonthlyViewEnabled] = useState(true);
  const calendarRef = useRef();
  let currentDate = new Date();
  const hoursAndMinutes = currentDate.getHours() + ':' + currentDate.getMinutes()
  const namEvento = `Concierto Por la paz SD Hora  ${hoursAndMinutes}`;

  const Calendar = {
    calendarEvents: [
      // initial event data
      {
        title: namEvento,
        start: '2023-01-29T14:30:00',
        end: '2023-01-31T14:30:00',
        url: ImgCalendar,
      },
    ],
  };

  /*
    const handleDateClick = (selected) => {
      const title = prompt("Please enter a new title for your event");
      const calendarApi = selected.view.calendar;
      calendarApi.unselect();
      console.log(selected)
      console.log(calendarApi)
      if (title) {
        calendarApi.addEvent({
          id: `${selected.dateStr}-${title}`,
          title,
          start: selected.startStr,
          end: selected.endStr,
          allDay: selected.allDay,
        });
      }
    };
   
    const handleEventClick = (selected) => {
      if (
        window.confirm(
          `Are you sure you want to delete the event '${selected.event.title}'`
        )
      ) {
        selected.event.remove();
      }
   
   
    };
  */

  return (
    <Box
      m='20px '
      height='100vh'
      display='flex'
      justifyContent='center'
      alignItems='center'
      sx={{}}
    >
      {/* <Header title="Calendar" subtitle="Full Calendar Interactive Page" /> */}

      <Box display='flex' justifyContent='center' width='80%'>
        {/* CALENDAR SIDEBAR
      
        {/* CALENDAR */}
        <Box flex='1 1 100%' ml='15px'>
          <FullCalendar

            height='95vh'
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",

              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            // events={currentEvents}
            eventContent={renderEventContent}
            /*  events={[
                { title: 'event 1', date: '2023-01-27' },
                { title: 'event 2', date: '2019-04-02' }
              ]}*/
            dayMaxEvents={true}
            // select={handleDateClick}
            // select={handleSelect}
            // eventClick={handleEventClick}
            //eventsSet={(events) => setCurrentEvents(events)}
            events={Calendar.calendarEvents}
            initialEvents={[
              {
                id: "12315",
                title: "All-day event",
                date: "2022-09-14",
              },
              {
                id: "5123",
                title: "Timed event",
                date: "2022-09-28",
              },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};
