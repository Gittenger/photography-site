import createNodes from "./utils/createNodes.js";
import setHeight from "./utils/setHeight.js";
import setSalData from "./utils/setSalData.js";

//cache grid and header
const grid = document.querySelector(".grid");
const header = document.querySelector("header");

//create grid
(function() {
  //create grid items based off of imageIndex, cache
  createNodes(grid);
  const gridItems = grid.querySelectorAll(".grid-item");

  //set height classes on newly created grid items
  setHeight(2, gridItems, 3, 4, 8, 12, 16, 18, 20);
  setHeight(3, gridItems, 17);
  setHeight(4, gridItems, 19, 21);
  setHeight(5, gridItems, 2, 7, 14);
  setHeight(6, gridItems, 25, 37);

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

const state = {
  infoVisible: false
};

//set listeners
(function() {
  const infoButton = header.querySelector("header .info-button");
  const homeButton = header.querySelector("header .home-button");
  const notStamp = grid.querySelectorAll(".grid > :not(.stamp)");
  const info = grid.querySelector(".information");

  //util functions for listeners
  function hideGridItems() {
    Array.from(notStamp).forEach(elem => {
      elem.classList.add("fadeOut");

      setTimeout(() => {
        elem.classList.add("hidden");
      }, 400);
    });
  }

  function showInfo() {
    setTimeout(() => {
      info.classList.add("fadeIn");
    }, 300);
  }

  function hideInfo() {
    info.classList.remove("fadeIn");
  }

  function showGridItems() {
    Array.from(notStamp).forEach(elem => {
      elem.classList.remove("hidden");
      elem.classList.remove("fadeOut");
    });
  }

  //show info
  infoButton.addEventListener("click", function() {
    if (state.infoVisible) return;
    hideGridItems();
    showInfo();

    setTimeout(() => {
      msnry.stamp(info);
      msnry.layout();
    }, 700);

    // trigger layout
    state.infoVisible = true;
  });

  //hide info
  homeButton.addEventListener("click", function() {
    if (!state.infoVisible) return;

    hideInfo();
    showGridItems();

    //unstamp element
    msnry.unstamp(info);

    setTimeout(() => {
      msnry.layout();
    }, 700);

    // trigger layout
    msnry.layout();
    state.infoVisible = false;
  });
})();
