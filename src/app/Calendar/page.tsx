"use client"

import { Calendar, dateFnsLocalizer } from "react-big-calendar"
import format from "date-fns/format"
import parse from "date-fns/parse"
import startOfWeek from "date-fns/startOfWeek"
import getDay from "date-fns/getDay"
import enUS from "date-fns/locale/en-US"
import "react-big-calendar/lib/css/react-big-calendar.css"

const locales = {
  "en-US": enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

// Dummy Events
const events = [
  {
    title: "Project Meeting",
    start: new Date(2025, 8, 10, 10, 0),
    end: new Date(2025, 8, 10, 11, 30),
  },
  {
    title: "Design Review",
    start: new Date(2025, 8, 12, 14, 0),
    end: new Date(2025, 8, 12, 15, 0),
  },
  {
    title: "Team Standup",
    start: new Date(2025, 8, 14, 9, 0),
    end: new Date(2025, 8, 14, 9, 30),
  },
]

export default function CalendarPage() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">📅 Calendar</h1>
      <div className="bg-white p-4 rounded-xl shadow-lg">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 600 }}
          views={["month", "week", "day"]}
          popup
        />
      </div>
    </div>
  )
}
