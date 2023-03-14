const userId = new URLSearchParams(window.location.search).get("id");

const modifyForm = document.getElementById("modify-user-form");

const readUser = async () => {
  const response = await fetch("http://localhost:3000/candidates/" + userId);
  const data = await response.json();
  modifyForm.name.value = data.name;
  modifyForm.lastName.value = data.lastName;
  modifyForm.phone.value = data.phone;
};
readUser();

const modifyUser = async (event) => {
  event.preventDefault();
  function isLettersOnly(input) {
    const lettersOnly = /^[A-Za-z]+$/;
    return lettersOnly.test(input);
  }
  const name = modifyForm.name.value;
  const lastName = modifyForm.lastName.value;
  const phone = modifyForm.phone.value;

  if (isLettersOnly(name) && isLettersOnly(lastName)) {
    const newUser = {
      name,
      lastName,
      phone,
    };

    await fetch("http://localhost:3000/candidates/" + userId, {
      method: "PUT",
      body: JSON.stringify(newUser),
      headers: { "Content-type": "application/json" },
    });

    window.location.replace("./exercise18.html");
  } else {
    alert("Use letters for name and last name; numbers for phone");
  }
};

modifyForm.addEventListener("submit", modifyUser);

// console.log(modifyForm.name.value);

// console.log(modifyForm);
