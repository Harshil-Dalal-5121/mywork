import React, { useState } from "react";

function Test2() {
  const [date, setDate] = useState(new Date());

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
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const prevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };
  const generateCalendarRows = (
    numberOfDaysInCurrentMonth,
    firstDayOfCurrentMonth
  ) => {
    const numRows = Math.ceil(
      (numberOfDaysInCurrentMonth + firstDayOfCurrentMonth) / 7
    );

    return Array.from({ length: numRows }, (_, rowIndex) => (
      <tr key={rowIndex}>
        {Array.from({ length: 7 }, (_, cellIndex) => {
          const dayOfMonth =
            rowIndex * 7 + cellIndex - firstDayOfCurrentMonth + 1;
          const isCellEmpty =
            dayOfMonth <= 0 || dayOfMonth > numberOfDaysInCurrentMonth;

          return <td key={cellIndex}>{isCellEmpty ? "" : dayOfMonth}</td>;
        })}
      </tr>
    ));
  };

  const rows = generateCalendarRows(daysInMonth, firstDayOfMonth);

  return (
    <div>
      <h1>
        {months[date.getMonth()]} {date.getFullYear()}
      </h1>
      <button onClick={prevMonth}>Prev</button>
      <button onClick={nextMonth}>Next</button>
      <table>
        <thead>
          <tr>
            {weekdays.map((weekday) => (
              <th key={weekday}>{weekday}</th>
            ))}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default Test2;
