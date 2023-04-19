const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const ageInput = document.querySelector("#age");
const button = document.querySelector("button");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const errors = [];

  if (nameInput.value.trim() === "") {
    errors.push("Preencha o seu nome");
  }

  if (emailInput.value.trim() === "") {
    errors.push("Preencha o seu endereço de e-mail");
  }

  if (ageInput.value.trim() === "") {
    errors.push("Preencha a sua idade");
  }

  if (errors.length) {
    alert(errors.join("\n"));
    return;
  }

    alert("Inscrição confirmada com sucesso!");
    form.reset();
});
