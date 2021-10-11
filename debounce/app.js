const button = document.getElementById("button");
const input = document.getElementById("input");

const debounce = (fn, delay) => {
  let timeout;
  return (...args) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      fn();
    }, delay);
  };
};

button.addEventListener(
  "click",
  debounce((e) => {
    console.log("You have purchased some items");
  }, 2000)
);
debounce((e) => {
  console.log("You have purchased some items");
}, 2000);

let timer;
input.addEventListener("input", function (e) {
  console.log(e.target.value);
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(function () {
    console.log("여기에 ajax 요청", e.target.value);
  }, 2000);
});
