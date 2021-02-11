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
        question: "스벨트는 가상돔을 사용한다.",
        examples: [
          {
            title: "YES",
            is_answer: false,
          },
          {
            title: "NO",
            is_answer: true,
          },
        ],
      },
      {
        id: 2,
        question: "스벨트의 스토어에서 가져온 데이터를 사용 하는 방법은?",
        examples: [
          {
            title: "{data}",
            is_answer: false,
          },
          {
            title: "{$data}",
            is_answer: true,
          },
          {
            title: "{#data}",
            is_answer: false,
          },
        ],
      },
      {
        id: 3,
        question: "스벨트에서 분기를 사용하는 방법은?",
        examples: [
          {
            title: "{#if ~~~ }",
            is_answer: true,
          },
          {
            title: "{$if ~~~ }",
            is_answer: false,
          },
          {
            title: "{if ~~~ }",
            is_answer: false,
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
