
const display_btn = document.getElementById('disp-btn');
const clock =document.getElementById('time-cont');
const selection = document.getElementById('regionList')

let interValid = false;
display_btn.addEventListener('click',()=>{
    if (interValid !== null) clearInterval(interValid);
        
    const currRegion = selection.value;
        interValid = setInterval(()=>{
            displayClock(currRegion);
        },1000);
        

})
function displayClock(region) {
  const now = new Date();

  const timeZones = {
    "Delhi": "Asia/Kolkata",
    "London": "Europe/London",
    "Tokyo": "Asia/Tokyo",
    "New York": "America/New_York",
    "Shanghai": "Asia/Shanghai",
    "Berlin": "Europe/Berlin",
    "Paris":"Europe/Paris",
    "Rome":"Europe/Rome",
    "Sao Paulo":"America/Sao_Paulo",
    "Moscow":"Europe/Moscow",
    "Toronto":"America/Toronto",
    "Seoul":"Asia/Seoul",
    "Madrid":"Europe/Madrid"
    
  };

  const timeZone = timeZones[region];
  if (!timeZone) return;

  clock.innerHTML = new Intl.DateTimeFormat("en-US", {
    timeZone: timeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  }).format(now);
}
