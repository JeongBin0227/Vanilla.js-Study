// console.log(Promise);

// const p = () => {
//   return new Promise((resolve, reject) => {
//     // pending
//     setTimeout(() => {
//       resolve("then"); /* fullfilled */
//     }, 1000);

//     // setTimeout(() => {
//     //   reject(); /* fullfilled */
//     // }, 1000);
//   });
// };

// //callback 작성 공간
// p()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch(() => {
//     console.log("b");
//   })
//   .finally(() => {
//     console.log("ss");
//   });

// function c(callback) {
//   setTimeout(() => {
//     callback();
//   }, 1000);
// }

// c(() => {
//   console.log("1000ms 후에 callback 함수가 실행됩니다.");
// });

// c(() => {
//   c(() => {
//     c(() => {
//       //3초후에
//       console.log("1000ms 후에 callback 함수가 실행됩니다.");
//     });
//   });
// });

// Promise 객체를 리턴하는 함수
function p(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      setTimeout(() => {
        // resolve(ms);
        reject(new Error("reason"));
      }, ms);
    });
  });
}

// Promise 객체를 이용해서 비동기 로직을 수행할 때
p(1000).then((ms) => {
  console.log(`${ms} ms 후에 실행됩니다.`);
});

