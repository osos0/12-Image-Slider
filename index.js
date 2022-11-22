const nextEl = document.querySelector(".fa-angles-right");
const prevEl = document.querySelector(".fa-angles-left");
const imagecontanerEl = document.querySelector(".image-contaner");
const imgEl = document.getElementsByTagName("img");

let num = 1;

nextEl.addEventListener("click", () => {
  num++;
  updateImg();
});

prevEl.addEventListener("click", () => {
  num--;
  updateImg();
});

updateImg();

function updateImg() {
  if (num > imgEl.length) num = 0;
  else if (num < 1) num = imgEl.length;
  imagecontanerEl.style.transform = `translateX(-${(num - 1) * 500}px)`;
  setTimeout(() => {
    num++;
    updateImg();
  }, 3000);
}
