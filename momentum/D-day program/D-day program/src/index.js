const clockTitle = document.querySelector(".js-clock");

const date = new Date();
const eveDate = new Date("December 24, 2022 00:00:00");
const nowHour = date.getHours();
const nowMin = date.getMinutes();
const nowSec = date.getSeconds();

function dayCalculaor() {
  const eveTime = eveDate.getTime();
  const nowTime = Date.now();
  const dDay = Math.floor((eveTime - nowTime) / 86400000);
  return dDay;
}
toEveAlarm();
function toEveAlarm() {
    const date = new Date();
    const nowHour = date.getHours();
    const nowMin = date.getMinutes();
    const nowSec = date.getSeconds();
  
  
    const toEveDay = dayCalculaor();
    const toEveHour = 23 - nowHour;
  const toEveMin = 59 - nowMin;
  const toEveSec = 59 - nowSec;

  clockTitle.innerText = `${toEveDay}d ${toEveHour}h ${toEveMin}m ${toEveSec}s`;
}

setInterval(toEveAlarm, 1000);