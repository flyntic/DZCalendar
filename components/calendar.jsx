
function Day(day,index)
{
  return (<td key={index}>
          <input type="button" value={day.val} ClassName={day.select} 
                 OnClick={()=>{ day.select=(day.select=="select")?"":"select";}}/>
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

export default function Calendar({Month})
{      
     return  (
      <table> 
       {Month.map( (week,index) => <tr key={index}>{week.map((day,index)=>Day(day,index))}</tr> ) }    
      </table>);
}
