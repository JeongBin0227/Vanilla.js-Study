const button = document.getElementById("button");
const input = document.getElementById("input");
const throttle = (fn, delay) => {
  let last = 0;
  return () => {
    const now = new Date().getTime();
    if (now - last < delay) {
      return;
    }
    last = now;
    return fn();
  };
};
button.addEventListener(
  "click",
  throttle((e) => {
    console.log("clicked!");
  }, 2000)
);

let timer;
input.addEventListener("input", function (e) {
  console.log(e.target.value);
  if (!timer) {
    timer = setTimeout(function () {
      timer = null;
      console.log("여기에 ajax 요청", e.target.value);
    }, 5000);
  }
});
