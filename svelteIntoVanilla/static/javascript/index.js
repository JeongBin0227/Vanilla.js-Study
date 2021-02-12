const startPage = new StartPage();
const quizPage = new QuizPage();
const resultPage = new ResultPage();

function Router() {
  this.route = async (path) => {
    if (path.includes("quiz")) {
      await quizPage.init();
      app.innerHTML = "";
      app.appendChild(quizPage.target);
    } else if (path.includes("result")) {
      const resultList = quizPage.getResultList();
      if (resultList.length === 0) {
        this.route("quiz");
        return;
      }
      resultPage.init(resultList);
      app.innerHTML = "";
      app.appendChild(resultPage.target);
    } else {
      startPage.init();
      app.innerHTML = "";
      app.appendChild(startPage.target);
    }
  };
}

const router = new Router();
const app = document.querySelector("#app");

router.route(location.pathname.replace("/", ""));
window.addEventListener("popstate", () => {
  router.route(location.pathname.replace("/", ""));
});
