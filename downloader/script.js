let btn = document.querySelector(".download");
let innerdiv = document.querySelector(".inner");
let outerdiv = document.querySelector(".outer");
let perc = document.querySelector(".percent");

let grow = 0;

btn.addEventListener("click", () => {
  setInterval(() => {
    grow++;

    perc.innerHTML = grow + "%";
  }, 100);
});
