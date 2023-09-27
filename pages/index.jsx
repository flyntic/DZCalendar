import { useState,useEffect } from "react";
import Calendar from "../components/calendar";
import Month from "../components/month";

export default function Home(){
  const [month,setMonth]=useState(Month(6,31)),
        [date,setDate]=useState("1");
    
        useEffect(() => {
          function f() {
           setMonth(month.map(w=>w.map(d=>{d.select=(d.value==date)?"select":" ";})));
         }
         f();
       }, [date,month]);
  return (
  <>
  <h1>Выберите дату</h1>
  <input type="number" name="date"
                    value={date}
                    onChange={(evt)=>setDate(evt.target.value)}
                /> 
  <Calendar Month={month} Date={date}/>
  </>);
}