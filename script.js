const questions = document.getElementsByClassName("question");

for (let i = 0; i < questions.length; i++) {
  const question = questions[i];
  const answer = question.querySelector(".answer");
  const h2 = question.querySelector("h2");
  const arrowImg = question.querySelector(".arrow-img");

  question.addEventListener("click", function () {
    answer.classList.toggle("show");
    h2.classList.toggle("active");
    arrowImg.classList.toggle("rotate");
  });
}
