import photos from "../ref/imgIndex.js";

export default function createNodes(grid) {
  for (let i = 1; i <= 40; i++) {
    const node = document.createElement("img");
    node.setAttribute("src", photos[i - 1].url);
    node.classList.add("grid-item");
    node.classList.add(`grid-item--${i}`);
    grid.appendChild(node);
  }
}
