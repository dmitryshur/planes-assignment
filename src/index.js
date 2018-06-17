import './main.css';

window.addEventListener('load', () => {
  fetch('/data').then(response => response.json()).then(result => { console.log(result) });
});
