//simple script to generate blank objects for img-info
const fs = require("fs");

const arr = [];

for (let i = 1; i <= 20; i++) {
  const obj = {
    id: `${i}`,
    url: `/img/img-${i}`,
    photographer: "",
    handle: "",
    location: {
      coords: [],
      text: ""
    },
    other: {
      text: ""
    }
  };
  arr.push(obj);
}

const output = JSON.stringify(arr);

fs.writeFileSync("object.js", output);
