
function week(monday, days) {
  let str = [];
  for (let i = monday; i < monday + 7; i++) {
    let cell = String(i);
    if (i < 1) cell = '<';
    if (i > days) cell = '>';
    str.push({val:cell.padStart(2, '_'),select:""});
  }
  
  return str;
}

function Day(day)
{
  return (<td>
          <input type="button" value={day.val} ClassName={day.select} 
                 OnClick={()=>{ day.select=(day.select=="select")?"":"select";}}/>
          </td>);
 
}

function WeekStr(_week) {
   return (
   <tr>
   {_week.map(day=>Day(day))}   
   </tr>
   );
}


export default function Calendar({Month})
{      
     return 
     (<table> 
       {Month.map(week=>WeekStr(week))}    
      </table>);
}
