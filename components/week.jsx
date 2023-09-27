export function week(monday, days) {
  let str = [];
  for (let i = monday; i < monday + 7; i++) {
    let cell = String(i);
    if (i < 1) cell = '<';
    if (i > days) cell = '>';
    str.push( { val: cell.padStart(2, '_'), select:"select" });
  }

  return str;
}
