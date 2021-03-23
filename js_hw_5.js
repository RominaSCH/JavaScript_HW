const clockContainer = document.querySelector(".dDay");
const clockTitle = clockContainer.querySelector("h2");

function getTime() {
    const date = new Date();
    const dateDiv = (date / 1000);

    const eveDate = new Date("2021-12-24:00:00:00+0900");
    const eveDateDiv = (eveDate / 1000);

    const dDate = Math.floor((eveDateDiv - dateDiv)/(86400));
    const calDate = dDate * (60 * 60 * 24);
    
    const dHours = Math.floor(((eveDateDiv - dateDiv) - (calDate))/3600);
    const calHours = dHours * (60 * 60);

    const dMinutes = Math.floor(((eveDateDiv - dateDiv) - (calDate) - (calHours))/60);
    const dSeconds = Math.floor(((eveDateDiv - dateDiv) - (calDate) - (calHours) - (dMinutes*60)));

    clockTitle.innerText = `${dDate}d ${dHours<10 ? `0${dHours}` : dHours}h ${
             dMinutes<10 ? `0${dMinutes}` : dMinutes}m ${
             dSeconds<10 ? `0${dSeconds}` : dSeconds
         }s`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}
init();