import './main.css';
import getPlanesData from './fetching';
import render from './dom-manipulation';

const updateTable = async function _updateTable() {
  const planesData = await getPlanesData();
  render(planesData);
};

window.addEventListener('load', () => {
  updateTable();
  setInterval(updateTable, 5000);
});
