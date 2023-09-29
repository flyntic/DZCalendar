import { useState,useEffect } from "react";
import Calendar from "../components/calendar";
import Month from "../components/month";
import PopUpWindow from '../components/PopUpWindow';

export default function Home() {
  const [month,setMonth]=useState(Month(6,31)),
        [date,setDate]=useState("2010-01-01"),
        [open, setOpen] = useState(false),
        [day,setDay]=useState("1");
        
        useEffect(() => {
          function f() {
             let d=new Date(date);
             d.setDate(day);
             setDate(d.toISOString().substring(10,-10));
             month.map(week=>week.map( d =>
               {  d.select=(day==d.val)?"select":"" }));
         }
         f();
       }, [day]);

  return (
  <>
  <h3>Выберите дату</h3>
  <div>

  <input type="date" name="date" value={date} id="calendarid"
                     onKeyDown={(e) => e.preventDefault()}    
                     onClick={_ => setOpen(true)}
                /> 
      {open && <PopUpWindow >
       <Calendar Month={month}  
                 OnClick={(evt)=>{setDay(evt.target.value); setOpen(false)}}/> 
      </PopUpWindow>}

  
  </div>
  </>
  );
}
