import React, { useState } from "react";

import Buttons from "../button/Buttons";

import styles from "./CalenderBody.module.css";

export const CalenderBody = () => {
  const [date, setDate] = useState(new Date());

  const prevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };

  const daysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const numberOfDaysInCurrentMonth = daysInMonth(
    date.getFullYear(),
    date.getMonth()
  );
  const firstDayOfCurrentMonth = firstDayOfMonth(
    date.getFullYear(),
    date.getMonth()
  );

  let rowsInCalender = [];
  let cellsInCalender = [];

  for (let i = 1; i <= firstDayOfCurrentMonth; i++) {
    cellsInCalender.push(<td />);
  }

  for (let i = 1; i <= numberOfDaysInCurrentMonth; i++) {
    cellsInCalender.push(<td className={styles["date-cells"]}>{i}</td>);
    if ((i + firstDayOfCurrentMonth) % 7 === 0) {
      rowsInCalender.push(<tr>{cellsInCalender}</tr>);
      cellsInCalender = [];
    }
  }
  rowsInCalender.push(<tr>{cellsInCalender}</tr>);

  return (
    <>
      <tbody>{rowsInCalender}</tbody>
      <tr>
        <td colSpan="2">
          <Buttons onClick={prevMonth} name="Previous Month" />
        </td>
        <td colSpan="3">
          {date.toLocaleString("default", { month: "long" })}{" "}
          {date.getFullYear()}
        </td>
        <td colSpan="2">
          <Buttons onClick={nextMonth} name="Next Month" />
        </td>
      </tr>
    </>
  );
};

export default CalenderBody;
