const form = document.querySelector("form");

const question1 = document.getElementsByName("question1");
const question2 = document.getElementsByName("question2");
const question3 = document.getElementsByName("question3");
const question4 = document.getElementsByName("question4");

const allQuestions = [...question1, ...question2, ...question3, ...question4];

const selecteds = {
  question1: "",
  question2: "",
  question3: "",
  question4: "",
};

for (const question of allQuestions) {
  question.addEventListener("change", () => {
    selecteds[question.name] = question.value;
    console.log(selecteds);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let sum = 0;

  if (selecteds.question1 === "b") {
    sum += 2.5;
  }

  if (selecteds.question2 === "c") {
    sum += 2.5;
  }

  if (selecteds.question3 === "a") {
    sum += 2.5;
  }

  if (selecteds.question4 === "c") {
    sum += 2.5;
  }

  if (sum < 7) {
    alert("Você não é um nerd :(");
    return;
  }

  alert("Você é um nerd :)");
  form.reset();
});
