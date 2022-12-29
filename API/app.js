const Root = document.querySelector("#root");
const image = document.querySelector("#btn");

function createItem(item) {
  // card
  const card = document.createElement("div");
  card.classList.add("card");

  // image
  const img = document.createElement("img");
  img.src = item.thumbnailUrl;
  // title
  const title = document.createElement("h4");
  title.src = item.title;
  card.appendChild(img);
  card.appendChild(title);
  root.appendChild(card);
}

function displayImage(items) {
  items.forEach((item) => {
    createItem(item);
  });
}

btn.addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
    .then((res) => res.json())
    .then((items) => {
      displayImage(items);
    });
});
