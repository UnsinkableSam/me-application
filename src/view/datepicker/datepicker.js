function DatesPicker(year, month) {
  var date = new Date(Date.UTC(year, month, 1));
  var days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}

export default DatesPicker;
