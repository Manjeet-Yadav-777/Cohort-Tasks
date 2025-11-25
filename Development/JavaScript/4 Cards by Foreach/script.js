let main = document.querySelector(".main");
let parent = document.querySelector(".parent");

let data = [
  {
    name: "Virat Kohli",
    image:
      "https://i.pinimg.com/736x/18/ed/30/18ed30f1fc0157410d06fa1cde915034.jpg",
  },

  {
    name: "Rohit Sharma",
    image:
      "https://peopleplaces.in/wp-content/uploads/2023/01/cropped-Rohit-Sharma.jpg",
  },

  {
    name: "MS Dhoni",
    image:
      "https://i.pinimg.com/736x/b7/6c/ca/b76cca733c65a6a7457e03d9f9b2704d.jpg",
  },
];

let sum = "";

data.forEach((player) => {
  sum =
    sum +
    `        <div class="card">
            <img class="img" src=${player.image} alt="">
            <h2 class="name">${player.name}</h2>
            <button class="btn">Meet Him</button>
        </div>`;
});

parent.innerHTML = sum;

main.appendChild(parent);
