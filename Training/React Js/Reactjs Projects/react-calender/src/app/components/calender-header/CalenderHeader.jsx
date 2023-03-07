import React from "react";

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const CalenderHeader = (month, year) => {
  return (
    <>
      <thead>
        <tr>
          {weekdays.map((day) => (
            <th>{day}</th>
          ))}
        </tr>
      </thead>
    </>
  );
};

export default CalenderHeader;
