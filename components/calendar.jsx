
function Day(day,index,_OnClick)
{console.log(day);
  return (<td key={index}>
          <input type="button" value={day.val} className={day.disableday}
                 OnClick={_OnClick}/>
          </td>);
 
}
/*
function WeekStr(_week) {
   return (
   <tr>
   {_week.map(day=>Day(day))}   
   </tr>
   );
}
*/

export default function Calendar({Month,_OnClick})
{      
     return  (
      <table> 
       {Month.map( (week,index) => <tr key={index}>{week.map((day,index)=>Day(day,index,_OnClick))}</tr> ) }    
      </table>);
}
