let like = document.querySelector(".like");
let post = document.querySelector(".chaiwala");
let card = document.querySelector(".card");

post.addEventListener("dblclick", () => {
  setTimeout(() => {
    like.style.opacity = "1";
    like.style.top = "50%";
    like.style.transform = `translate(-50%, -50%) scale(1) rotate(0deg)`;
  }, 100);

  setTimeout(() => {
    like.style.top = "-10%";
  }, 1000);

  setTimeout(() => {
    like.style.opacity = 0;
  }, 1100);

  setTimeout(() => {
    like.style.top = "110%";
  }, 1200);
});
