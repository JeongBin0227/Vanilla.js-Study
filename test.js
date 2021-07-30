function solution() {
  var vacation = [
    { 이름: "장다혜", 나이: 26 },
    { 이름: "김정빈", 나이: 30 },
  ];

  // console.log(vacation);
  var b = vacation.filter((a) => a.이름 !== "장다혜");

  console.log(b);
}

solution();
