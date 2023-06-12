const questions = document.getElementsByClassName("question");

for (let i = 0; i < questions.length; i++) {
  const question = questions[i];
  const answer = question.querySelector(".answer");
  const h2 = question.querySelector("h2");
  const arrowImg = question.querySelector(".arrow-img");

  question.addEventListener("click", function () {
    const isActive = h2.classList.contains("active");

    // Remove active class from all h2 elements
    const questionsH2 = document.querySelectorAll(".question h2");
    questionsH2.forEach((h2) => {
      h2.classList.remove("active");
    });

    // Hide all answer elements
    const allAnswers = document.querySelectorAll(".answer");
    allAnswers.forEach((answer) => {
      answer.classList.remove("show");
    });

    // Reset arrow images to not clicked state
    const allArrowImg = document.querySelectorAll(".arrow-img");
    allArrowImg.forEach((arrowImg) => {
      arrowImg.classList.remove("rotate");
    });

    // Toggle classes for the clicked question
    answer.classList.toggle("show", !isActive);
    h2.classList.toggle("active", !isActive);
    arrowImg.classList.toggle("rotate", !isActive);
  });
}
