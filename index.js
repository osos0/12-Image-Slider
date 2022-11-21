const contanerEl = document.querySelector(".contaner");
const btnL = document.querySelector(".fa-angles-left");
const btnR = document.querySelector(".fa-angles-right");
const img1 = document.getElementsByTagName("img")[0];
console.log(img1);

// btnL.addEventListener("click", () => {
//   //   console.log(`l`);
//   //   img1.style.transform = "translateX(-500px)";
// });

btnR.addEventListener("click", () => {
  img1.classList.add("active") + 500;
  console.log(33);
  console.log(img1);
});
