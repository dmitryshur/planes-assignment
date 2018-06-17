import './main.css';
import getPlanesData from './fetching';
import { addTableBody, initialRender } from './dom-manipulation';

const tableBody = document.querySelector('tbody');
const prevData = null;

const updateTable = async function _updateTable() {
  const planesData = await getPlanesData();
  initialRender(planesData);
}

window.addEventListener('load', () => {
  const update = updateTable();
});
