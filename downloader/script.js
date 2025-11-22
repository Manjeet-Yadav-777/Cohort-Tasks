let btn = document.querySelector(".download");
let innerdiv = document.querySelector(".inner");
let outerdiv = document.querySelector(".outer");
let perc = document.querySelector(".percent");
let para = document.querySelector(".para");

let grow = 0;

btn.addEventListener("click", () => {
  let inter = setInterval(() => {
    grow++;
    if (grow == 100) {
      para.innerHTML = "Download Completed ✅";
      clearInterval(inter);
    }
    perc.innerHTML = grow + "%";
    innerdiv.style.width = grow + "%";
  }, 50);
});
