function QuizPage() {
  this.quizList = [];

  this.init = async () => {
    this.loadQuizList();
    this.setElements();
    this.bindEvents();
    this.setCurrentQuiz(this.quizList[0]);
  };

  this.loadQuizList = async () => {
    this.quizList = [
      {
        id: 1,
        question: "dasdas",
        examples: [
          {
            title: "dasdad",
            is_answer: "dsadas",
          },
          {
            title: "dasdad",
            is_answer: "dsadas",
          },
          {
            title: "dasdad",
            is_answer: "dsadas",
          },
        ],
      },
      {
        id: 2,
        question: "zzzzzzz",
        examples: [
          {
            title: "dasdad",
            is_answer: "dsadas",
          },
          {
            title: "dasdad",
            is_answer: "dsadas",
          },
          {
            title: "dasdad",
            is_answer: "dsadas",
          },
        ],
      },
      {
        id: 3,
        question: "pppppdsadpasdas",
        examples: [
          {
            title: "dasdad",
            is_answer: "dsadas",
          },
          {
            title: "dasdad",
            is_answer: "dsadas",
          },
          {
            title: "dasdad",
            is_answer: "dsadas",
          },
        ],
      },
    ];
  };

  this.setElements = () => {
    this.template = /*html*/ `
			<div id="quiz-page">
				<div class="quiz-container"></div>
			</div>
		`;

    this.target = document.createElement("div");
    this.target.innerHTML = this.template;
    this.target = this.target.firstElementChild;

    this.quizContainer = this.target.querySelector(".quiz-container");

    this.quizList = this.quizList.map((quizInfo) => {
      const quiz = new Quiz(this, quizInfo);
      this.quizContainer.appendChild(quiz.target);

      return quiz;
    });
  };

  this.bindEvents = () => {};

  this.setCurrentQuiz = (newCurrentQuiz) => {
    this.quizList.forEach((quiz) => quiz.hide());
    newCurrentQuiz.show();
  };

  this.selectAnswer = (answerInfo) => {
    const currentQuiz = this.quizList.reduce(
      (currentQuizInfo, quiz, index) => {
        return quiz.id === answerInfo.quizId
          ? {
              index,
              quiz,
            }
          : currentQuizInfo;
      },
      { index: 0, quiz: {} }
    );
    currentQuiz.quiz.answer = answerInfo.answerIndex;

    const nextQuiz = this.quizList[currentQuiz.index + 1];

    setTimeout(() => {
      if (nextQuiz) {
        this.setCurrentQuiz(nextQuiz);
      } else {
        router.route("result");
      }
    }, 800);
  };

  this.getResultList = () => {
    return this.quizList.map((quiz) => ({
      question: quiz.question,
      examples: quiz.examples,
      answer: quiz.answer,
    }));
  };
}
