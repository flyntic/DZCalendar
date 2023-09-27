import { week } from "./calendar";


export default function Month(startShift, days) {
  let strs = [];
  for (let m = 1 - startShift; m <= days; m += 7) {
    strs.push(week(m, days));
  }
  return strs;
}
