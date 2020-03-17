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
  once: false
});

//masonry options
const msnry = new Masonry(".grid", {
  // options
  itemSelector: ".grid-item",
  columnWidth: 270,
  gutter: 15,
  fitWidth: true
});

//set listeners
(function() {
  const grid = document.querySelector(".grid");
  const stampElem = grid.querySelector(".information");
  const stampButton = document.querySelector("header .stamp-button");

  let isStamped = false;

  function setStyles(stamped, stamp) {
    const notStamp = grid.querySelectorAll(":not(.stamp)");

    Array.from(notStamp).forEach(elem => {
      if (elem.classList.contains("fade")) elem.classList.remove("fade");
      else elem.classList.add("fade");

      if (elem.classList.contains("hidden")) elem.classList.remove("hidden");
      else
        setTimeout(() => {
          elem.classList.add("hidden");
          msnry.layout();
        }, 600);
    });

    if (stampElem.classList.contains("fade"))
      stampElem.classList.remove("fade");
    else
      setTimeout(() => {
        stampElem.classList.add("fade");
      }, 500);
  }

  stampButton.addEventListener("click", function() {
    //trigger styles
    setStyles(isStamped, stampElem);

    // stamp or unstamp element
    if (isStamped) {
      msnry.unstamp(stampElem);
    } else {
      setTimeout(() => {
        msnry.stamp(stampElem);
      }, 500);
    }

    // trigger layout
    msnry.layout();
    isStamped = !isStamped;
  });
})();
