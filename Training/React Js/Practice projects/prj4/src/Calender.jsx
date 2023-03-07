import React, { useState } from "react";

function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const weekdaysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  );
  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();
  const startingDay = firstDayOfMonth.getDay();
  console.log(startingDay);

  const calendarRows = [];
  let calendarCells = [];

  // fill up the calendar cells for the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarCells.push(<td key={day}>{day}</td>);

    if (
      new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        day
      ).getDay() === 6
    ) {
      // if it's Saturday, wrap to the next row
      calendarRows.push(<tr key={day}>{calendarCells}</tr>);
      calendarCells = [];
    }
  }

  // if there are any remaining calendar cells, add them to the last row
  if (calendarCells.length > 0) {
    calendarRows.push(<tr key={daysInMonth}>{calendarCells}</tr>);
  }

  return (
    <div>
      <h1>
        {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
      </h1>
      <table>
        <thead>
          <tr>
            {weekdaysShort.map((day) => (
              <th>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>{calendarRows}</tbody>
      </table>
      <button
        onClick={() =>
          setCurrentMonth(
            new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
          )
        }
      >
        Prev
      </button>
      <button
        onClick={() =>
          setCurrentMonth(
            new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
          )
        }
      >
        Next
      </button>
    </div>
  );
}

export default Calendar;
