const form = document.querySelector("form");
const inputName = document.querySelector("#input-name");
const inputEmail = document.querySelector("#input-email");
const inputPassword = document.querySelector("#input-password");
const inputConfirmPassword = document.querySelector("#input-confirm-password");
const acceptTerms = document.querySelector("#checkbox");
const strong = document.querySelector("strong");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  strong.textContent = "";

  if (inputName.value.length < 10) {
    strong.textContent = "Nome deve ter no mínimo 10 caracteres";
    return;
  }

  if (inputEmail.value.indexOf("hotmail") === -1) {
    strong.textContent = "Só aceitamos email da hotmail!";
    return;
  }

  if (inputPassword.value !== inputConfirmPassword.value) {
    strong.textContent = "As senhas não correspondem";
    return;
  }

  if (!acceptTerms.checked) {
    strong.textContent = "Você deve aceitar os termos";
    return;
  }

  const data = {
    name: inputName.value,
    email: inputEmail.value,
    password: inputPassword.value,
    acceptTerms: acceptTerms.checked,
  };

  console.log(data);
  strong.textContent = "Parabéns, cadastro efetuado com sucesso!";
});
