//1;
// const currentDay = new Date("may 27,2022");
// const day1 = currentDay.getDay();

// console.log(day1);

const currentDay = new Date().getDay();

switch (currentDay) {
  case 0:
    weekDay = "კვირა";
    break;
  case 1:
    weekDay = "ორშაბათი";
    break;
  case 2:
    weekDay = "სამშაბათი";
    break;
  case 3:
    weekDay = "ოთხშაბათი";
    break;
  case 4:
    weekDay = "ხუთშაბათი";
    break;
  case 5:
    weekDay = "პარასკევი";
    break;
  case 6:
    weekDay = "შაბათი";
    break;
}

console.log(weekDay);

// 2.
for (let i = 0; i < 100; i++) {
  console.log(i);
}

// 3.
let i = 0;
while (i < 50) {
  i++;
  console.log(i);
}

// 4.
do {
  i++;
  console.log(i);
} while (i < 150);

// 5.
let myArray = [];
for (let i = 1; i <= 1000; i++) {
  myArray.push(i * i);
}

console.log(myArray);
