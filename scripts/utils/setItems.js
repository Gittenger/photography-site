//creates filter queries for setting attributes
export default function setItems(...itemsIndexes) {
  return itemsIndexes.map(item => `grid-item--${item}`);
}
