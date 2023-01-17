const composition = document.querySelector(".composition");
const compositionPhoto = document.querySelectorAll(".composition__photo");
console.log(compositionPhoto);

composition.addEventListener("click", (e) => {
  if (!e.target.classList.contains("composition__photo")) return;
  [...compositionPhoto].forEach((photo) => {
    if (photo.classList === e.target.classList) photo.style.zIndex = "100";
    else photo.style.zIndex = "1";
  });
  e.target.style.zIndex = "100";
});
