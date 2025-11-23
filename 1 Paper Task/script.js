let btn = document.querySelector(".btn");
let scr = document.querySelector(".scr");

btn.addEventListener("click", () => {
  let t = Math.floor(Math.random() * 100);
  let l = Math.floor(Math.random() * 100);

  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256);

  let paper = document.createElement("div");

  paper.style.height = "50px";
  paper.style.width = "50px";
  paper.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;
  paper.style.position = "absolute";
  paper.style.top = t + "%";
  paper.style.left = l + "%";

  scr.appendChild(paper);
});
