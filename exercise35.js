const sortButton = document.querySelector("#sortButton");
const table = document.querySelector("#myTable");

sortButton.addEventListener("click", sortTable);

function sortTable() {
  const tbody = table.getElementsByTagName("tbody")[0];
  console.log(tbody);
  const rows = Array.from(tbody.rows);

  rows.sort((a, b) => {
    const aAge = Number(a.cells[1].textContent);
    const bAge = Number(b.cells[1].textContent);
    return aAge - bAge;
  });

  table.removeChild(tbody);

  const sortedTbody = document.createElement("tbody");
  rows.forEach((row) => sortedTbody.appendChild(row));
  table.appendChild(sortedTbody);
}
