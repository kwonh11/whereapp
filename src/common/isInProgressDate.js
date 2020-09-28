

function getTimeString(date) {
    if(!date) return false;
    const [year, month, day] = [date.slice(0,4), date.slice(4,6), date.slice(6,8)];
    const resultDate = new Date();
    resultDate.setFullYear(year, month-1, day);
    return resultDate.getTime();
  }
export default function isInProgress(eventStartDate, eventEndDate) {
    const now = new Date().getTime();
    const start = getTimeString(eventStartDate);
    const end = getTimeString(eventEndDate);
    if (!start || !end) return false;
    return start <= now && now <= end ? true : false;
}