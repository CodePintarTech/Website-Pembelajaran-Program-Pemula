function submitAnswers() {
  const correctAnswers = {
    question1: "1", // Jawaban benar untuk Pertanyaan 1
    question2: "1", // Jawaban benar untuk Pertanyaan 2
  };

  let score = 0;
  let totalQuestions = Object.keys(correctAnswers).length;

  for (let [question, answer] of Object.entries(correctAnswers)) {
    const selectedAnswer = document.querySelector(
      `input[name="${question}"]:checked`
    );
    if (selectedAnswer && selectedAnswer.value === answer) {
      score++;
    }
  }

  alert(`Skor Anda: ${score}/${totalQuestions}`);
}
