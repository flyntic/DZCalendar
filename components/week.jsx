export function week(monday, days) {
  let str = [];
  for (let i = monday; i < monday + 7; i++) {
   let cell= String(i);
   let disableday="";
    if ((i < 1)||(i>days))
    { disableday="disableday";
      cell="  ";
    }
    str.push( { val:cell, select:"", disableday:disableday });
  } 

  return str;
}
