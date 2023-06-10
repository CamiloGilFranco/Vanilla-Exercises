const d = document;
const w = window;

export default function speechReader() {
  const domSpeechSelect = d.getElementById("speech-select");
  const domSpeechTextarea = d.getElementById("speech-text");
  const domSpeechBtn = d.getElementById("speech-btn");
  const speechMessage = new SpeechSynthesisUtterance();

  let voices = [];

  d.addEventListener("DOMContentLoaded", (e) => {
    w.speechSynthesis.addEventListener("voiceschanged", (e) => {
      voices = w.speechSynthesis.getVoices();

      voices.forEach((voice) => {
        const domOption = d.createElement("option");
        domOption.value = voice.name;
        domOption.textContent = `${voice.name} ***** ${voice.lang}`;

        domSpeechSelect.appendChild(domOption);
      });
    });
  });

  d.addEventListener("change", (e) => {
    if (e.target === domSpeechSelect) {
      speechMessage.voice = voices.find((voice) => {
        voice.name === e.target.value;
      });
    }
    console.log(speechMessage);
  });

  d.addEventListener("click", (e) => {
    if (e.target === domSpeechBtn) {
      speechMessage.text = domSpeechTextarea.value;
      w.speechSynthesis.speak(speechMessage);
    }
  });
}
