const out = document.getElementById("out");
const events = new EventSource("/stream");

events.onmessage = (evt) => {
  if (out) out.textContent += `${evt.data} `;
};
