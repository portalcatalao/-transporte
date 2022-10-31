import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
//eslint-disable-next-line no-console
export default function calendarTeste() {
  const [date, setDate] = useState([new Date(2022, 1, 1)]);

  return (
    <section>
      <Calendar
        onChange={setDate}
        value={date}
        maxDetail="year"
        maxDate={new Date()}
        minDate={new Date(2022, 1, 1)}
        next2Label=">>"
        next2AriaLabel="Próximo ano"
        prev2Label="<<"
        prev2AriaLabel="Ano anterior" // will not allow date before 1st July 2015
      />
    </section>
  );
}
