const button = document.getElementById("button");
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
