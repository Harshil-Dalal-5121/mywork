import React from "react";

function Calendar({ year, month }) {
  const currentMonthDays = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = new Date(year, month, 1).getDay();

  const days = [
    ...new Array(firstDayIndex).fill(""),
    ...new Array(currentMonthDays).fill().map((_, i) => i + 1),
  ];

  const { rows } = days.reduce(
    ({ row, rows }, item, index) => {
      if (index % 7 === 0) {.
        
        rows.push(row);
        row = [];
      } else {
        row.push(item);
      }

      return {
        rows,
        row,
      };
    },
    {
      row: [],
      rows: [],
    }
  );

  console.log({ rows });
  return (
    <table>
      <thead>
        <tr>
          <th>Sun</th>
          <th>Mon</th>
          <th>Tue</th>
          <th>Wed</th>
          <th>Thu</th>
          <th>Fri</th>
          <th>Sat</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            console.log(i)
            {row.map((day, j) => (
              <td key={j}>{day}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Calendar;
