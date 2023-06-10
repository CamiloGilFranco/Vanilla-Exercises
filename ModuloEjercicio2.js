const d = document;
let clockTempo;
let alarmTempo;

export function digitalClock(clock, btnPlay, btnStop) {
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      clockTempo = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString();
        d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
      }, 1000);

      e.target.disabled = true;
    }
    if (e.target.matches(btnStop)) {
      clearInterval(clockTempo);
      d.querySelector(clock).innerHTML = null;
      d.querySelector(btnPlay).disabled = false;
    }
  });
}

export function alarm(sound, btnPlay, btnStop) {
  const SoundAlarm = d.createElement("audio");

  SoundAlarm.src = sound;

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      alarmTempo = setTimeout(() => {
        SoundAlarm.play();
      }, 100);
      e.target.disabled = true;
    }
    if (e.target.matches(btnStop)) {
      clearTimeout(alarmTempo);
      SoundAlarm.pause();
      SoundAlarm.currentTime = 0;
      d.querySelector(btnPlay).disabled = false;
    }
  });
}
