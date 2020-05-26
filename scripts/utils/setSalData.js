export default function setSalData(gridItems) {
  gridItems.forEach(item => {
    item.setAttribute("data-sal", "fade");
    item.setAttribute("data-sal-duration", "300");
    item.setAttribute("data-sal-delay", "200");
    item.setAttribute("data-sal-easing", "ease-in-bounce");
  });
}
