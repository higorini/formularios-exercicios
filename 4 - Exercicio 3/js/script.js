const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const periodSelect = document.querySelector("#period");
const button = document.querySelector("button");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const errors = [];

  if (nameInput.value.trim() === "") {
    errors.push("Preencha o seu nome!");
  }

  if (emailInput.value.trim() === "") {
    errors.push("Preencha o seu endereço de e-mail!");
  }

  if (!periodSelect.selectedIndex) {
    errors.push("Selecione um período!");
  }

  if (errors.length) {
    alert(errors.join("\n"));
    return;
  }

  const data = {
    name: nameInput.value,
    email: emailInput.value,
    period: periodSelect.options[periodSelect.selectedIndex].value,
  };

  console.log(data);

  alert("Reserva efetuada!");
  form.reset();
});
