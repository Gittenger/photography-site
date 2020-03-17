import photos from "../ref/imgIndex.js";

export default function createNodes(grid) {
  for (let i = 1; i <= 40; i++) {
    //create outer box for images, apply classes
    const imgBox = document.createElement("div");
    const gridItemClasses = ["grid-item", `grid-item--${i}`, "image-box"];
    imgBox.classList.add(...gridItemClasses);

    //create figure, append to box
    const fig = document.createElement("figure");
    fig.classList.add("figure");
    imgBox.appendChild(fig);

    //create image wrapper, append to fig
    const wrapper = document.createElement("div");
    wrapper.classList.add("image-wrapper");
    fig.appendChild(wrapper);
    fig.appendChild(document.createElement("figcaption"));

    //create caption
    const captionText = `Photographer: ${
      photos[i - 1].photographer
    }; Instagram: ${photos[i - 1].handle}`;
    const caption = document.createTextNode(captionText);
    fig.querySelector("figcaption").appendChild(caption);

    //set tooltip to caption
    imgBox.setAttribute("title", captionText);

    //create imgs, append to wrapper
    const img = document.createElement("img");
    img.setAttribute("src", photos[i - 1].url);
    wrapper.appendChild(img);

    //append boxes to grid
    grid.appendChild(imgBox);
  }
}
