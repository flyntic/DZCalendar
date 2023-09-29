function Day(day,OnClick)
{
  return (<td >
          <input type="button" value={day.val} className={day.disableday+" "+day.select}
                 onClick={OnClick}/>
          </td>);
 
}

export default function Calendar({Month,OnClick})
{      
     return  (
      <table> 
       {Month.map( (week,index) => <tr key={index}>{week.map((day,index)=>Day(day,OnClick))}</tr> ) }    
      </table>);
}
