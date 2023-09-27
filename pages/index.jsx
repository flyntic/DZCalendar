import { useState,useEffect } from "react";
import Calendar from "../components/calendar";
import Month from "../components/month";

export default function Home(){
  const [month,setMonth]=useState(Month(6,31)),
        [date,setDate]=useState("1.1.2023"),
        [day,setDay]=useState("1");
        
        useEffect(() => {
          function f() {
            console.log(day);
           month.map(week=>week.map( d =>d.select=({day}==d.val)?"select":"" ));
         }
         f();
       }, [day,month]);
  return (
  <>
  <h1>Выберите дату</h1>
  <input type="date" name="date"
                    value={date}
                    onChange={(evt)=>setDay(evt.target.date.day)}
                /> 
  <Calendar Month={month} Date={date} _OnClick={(evt)=>{console.log(evt.target.value);setDay(evt.target.value);}}/>
  </>);
}

//=(day.val=={date})?:" "