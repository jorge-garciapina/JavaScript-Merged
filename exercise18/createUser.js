let createUserForm = document.getElementById("create-user-form");

const createNewUser = async (event) => {
  event.preventDefault();
  function isLettersOnly(input) {
    const lettersOnly = /^[A-Za-z]+$/;
    return lettersOnly.test(input);
  }
  const name = createUserForm.name.value;
  const lastName = createUserForm.lastName.value;
  const phone = createUserForm.phone.value;

  if (isLettersOnly(name) && isLettersOnly(lastName)) {
    const newUser = {
      name,
      lastName,
      phone,
    };

    await fetch("http://localhost:3000/candidates", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: { "Content-type": "application/json" },
    });

    window.location.replace("./exercise18.html");
  } else {
    alert("Use letters for name and last name; numbers for phone");
  }
};
createUserForm.addEventListener("submit", createNewUser);
