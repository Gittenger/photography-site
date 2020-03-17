import createNodes from "./utils/createNodes.js";
import setHeight from "./utils/setHeight.js";
import setSalData from "./utils/setSalData.js";

//create grid
(function() {
  //cache grid
  const grid = document.querySelector(".grid");

  //create grid items based off of imageIndex, cache
  createNodes(grid);
  const gridItems = grid.querySelectorAll(".grid-item");

  //set height classes on newly created grid items
  setHeight(2, gridItems, 2, 4, 6, 8, 12, 14, 16, 18, 20);
  setHeight(3, gridItems, 17);
  setHeight(4, gridItems, 19, 25, 37);

  //set data attributes for animation with sal
  setSalData(gridItems);
})();

//sal options
sal({
  once: true
});

//masonry options
const msnry = new Masonry(".grid", {
  // options
  itemSelector: ".grid-item",
  columnWidth: 270,
  gutter: 15,
  fitWidth: true
});
