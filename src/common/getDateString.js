
export default function getDateString(createAt) {
    const date = new Date(createAt);
    const year = date.getFullYear();
    const Month = date.getMonth()+1;
    const month = Month < 10? "0" + Month : Month;
    const Day = date.getDate();
    const day = Day < 10? "0" + Day : Day;
    const Hours = date.getHours();
    const hours = Hours < 10? "0" + Hours : Hours;
    const Minutes = date.getMinutes();
    const minutes = Minutes < 10? "0" + Minutes : Minutes;
    return `${year}-${month}-${day} ${hours}:${minutes}`;
}