import setItems from "./setItems.js";

export default function setHeight(height, gridItems, ...items) {
  //filter items from gridItems for adding height class
  setItems(...items)
    .map(itemToModify =>
      Array.from(gridItems).filter(gridItem =>
        gridItem.classList.contains(itemToModify)
      )
    ) //flatten map
    .map(arr => arr[0]) //add heights
    .forEach(node => node.classList.add(`grid-item--height${height}`));
}
