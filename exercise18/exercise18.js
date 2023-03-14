async function getData() {
  try {
    const response = await fetch("http://localhost:3000/candidates");
    const data = await response.json();
    data.forEach((element) => {
      const userID = element.id;

      // Get the table element
      const table = document.getElementById("candidate-table");
      // Create a new row element
      const newRow = document.createElement("tr");

      // Create cell elements and append them to the new row
      const nameCell = document.createElement("td");
      nameCell.textContent = element.name;
      newRow.appendChild(nameCell);

      const lastNameCell = document.createElement("td");
      lastNameCell.textContent = element.lastName;
      newRow.appendChild(lastNameCell);

      const phoneCell = document.createElement("td");
      phoneCell.textContent = element.phone;
      newRow.appendChild(phoneCell);

      const actionsCell = document.createElement("td");
      const deleteUserButton = document.createElement("button");
      const modifyUserButton = document.createElement("button");
      deleteUserButton.classList = "userButton";
      modifyUserButton.classList = "userButton";

      deleteUserButton.textContent = "Delete";
      modifyUserButton.textContent = "Modify";

      deleteUserButton.onclick = () => {
        delteUser(userID);
      };

      modifyUserButton.onclick = () => {
        window.location.replace(`./modifyUser.html?id=${userID}`);
      };

      actionsCell.appendChild(deleteUserButton);
      actionsCell.appendChild(modifyUserButton);

      newRow.appendChild(actionsCell);

      // Append the new row to the table
      table.appendChild(newRow);
    });
  } catch (error) {
    console.error(error);
  }
}

getData();

async function delteUser(id) {
  const response = await fetch("http://localhost:3000/candidates/" + id, {
    method: "DELETE",
  });
}
