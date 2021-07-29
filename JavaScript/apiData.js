const datas = {
  message: "SUCCESS",
  data: [
    {
      vacationId: 1,
      userId: "hongjun",
      userName: "홍준",
      type: "BASIC",
      startDate: "2021-06-01 09:00",
      endDate: "2021-06-01 10:00",
      hour: 1,
      reason: "쉬려고",
    },
    {
      vacationId: 2,
      userId: "ohtaeg",
      userName: "태경",
      type: "COMPENSATION_LEAVE",
      startDate: "2021-06-01 16:00",
      endDate: "2021-06-01 18:00",
      hour: 2,
      reason: "여름휴가",
    },
    {
      vacationId: 3,
      userId: "ohtaeg",
      userName: "태경",
      type: "COMPENSATION_LEAVE",
      startDate: "2021-06-01 10:00",
      endDate: "2021-06-01 14:00",
      hour: 3,
      reason: "여름휴가",
    },
  ],
};

const map = new Map();
let vacationData = {
  name: [],
  data: [],
};

datas.data.forEach((s) => {
  if (vacationData.name.includes(s.userId)) {
    vacationData.data.forEach((d) => {
      if (d.userName === s.userId) {
        const newArray = [];

        newArray.push(+s.startDate.split(" ")[1].replace(":", ""));
        newArray.push(+s.endDate.split(" ")[1].replace(":", ""));
        newArray.push(s.hour);

        d.vacation.push(newArray);
      }
    });
  } else {
    const newObject = {};
    const newArray = [];
    const newArray2 = [];

    newObject.userName = s.userId;
    newArray.push(+s.startDate.split(" ")[1].replace(":", ""));
    newArray.push(+s.endDate.split(" ")[1].replace(":", ""));
    newArray.push(s.hour);

    newArray2.push(newArray);
    vacationData.name.push(s.userId);
    newObject.vacation = newArray2;
    vacationData.data.push(newObject);
  }
  // if (map.get(s.userId) !== undefined) {
  //   const array = map.get(s.userId);
  //   const newArray = [];

  //   newArray.push(+s.startDate.split(" ")[1].replace(":", ""));
  //   newArray.push(+s.endDate.split(" ")[1].replace(":", ""));
  //   newArray.push(s.hour);

  //   array.push(newArray);

  //   map.set(s.userId, array);
  // } else {
  //   const newArray = [];
  //   const newArray2 = [];

  //   newArray.push(+s.startDate.split(" ")[1].replace(":", ""));
  //   newArray.push(+s.endDate.split(" ")[1].replace(":", ""));
  //   newArray.push(s.hour);

  //   newArray2.push(newArray);
  //   map.set(s.userId, newArray2);
  // }
});

// map.forEach((a) => {
//   console.log(a);
//   a.sort((b, c) => b[0] - c[0]);
// });

// let startTime = 900;

// map.forEach((a) => {
//   a.forEach((b) => {
//     console.log((b[0] - startTime) / 100);
//     console.log(b[2]);
//     startTime = b[1];
//   });
//   console.log("끝");
//   startTime = 900;
// });

console.log(vacationData.data[0].vacation);
