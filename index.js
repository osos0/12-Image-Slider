const contanerEl = document.querySelector(".contaner");
const btnL = document.querySelector(".fa-angles-left");
const btnR = document.querySelector(".fa-angles-right");
const imgEl = document.getElementsByTagName("img");
// console.log(img);

// btnL.addEventListener("click", () => {
//   //   console.log(`l`);
//   //   img1.style.transform = "translateX(-500px)";
// });
let num = 0;
btnR.addEventListener("click", () => {
  num++;
  imgEl[num].style.transform = `translateX(-${num * 500}px)`;
  console.log(num);
});
btnL.addEventListener("click", () => {
  num--;
  imgEl[num].style.transform = `translateX(${num * 500}px)`;
  // console.log(num);
});

// function updateImg() {
//   if (num > imgEl.length) {
//     num = 0;
//   }
//   imgEl[num].style.transform = `translateX(-${num * 500}px)`;
// }
