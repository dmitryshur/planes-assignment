export default function render(data) {
  const tableBody = document.querySelector('tbody');
  const rowsCount = data.length;
  const columnsCount = 8;

  // create a row for each new plane data
  const rows = [...Array(rowsCount).keys()].map((number) => {
    const row = document.createElement('tr');

    // create the needed colums
    for (const i of [...Array(columnsCount).keys()]) {
      const column = document.createElement('td');
      column.classList.add('text-left');
      let columnText = null;

      // match the data with the needed position in the row
      switch (i) {
        case 0:
          columnText = data[number].flight;
          break;
        case 1:
          columnText = data[number].airports[0];
          break;
        case 2:
          columnText = data[number].airports[1];
          break;
        case 3:
          columnText = data[number].altitude;
          break;
        case 4:
          columnText = data[number].track;
          break;
        case 5:
          columnText = data[number].speed;
          break;
        case 6:
          columnText = data[number].coordinates[0];
          break;
        case 7:
          columnText = data[number].coordinates[1];
          break;
        default:
      }

      // some data might not be available yet
      columnText = columnText !== '' ? columnText : '-';
      column.textContent = columnText;
      row.appendChild(column);
    }

    return row;
  });

  tableBody.innerHTML = '';

  for (const row of rows) {
    tableBody.appendChild(row);
  }
}
