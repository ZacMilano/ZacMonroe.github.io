import ReactDOM from "react-dom";

const csv = require("csv-parser");
// const fs = require("fs");

import DATA from "data/test-data.json";

// fs.createReadStream(dataFileName)
//   .pipe(csv()
//   .on("data", (d) => {
//     DATA.push({topic: d.TOPIC, botscore: d.BOTSCORE});
//   })
//   .on("end", () => {
//     console.log("Data added.");
//     console.log(DATA);
//   }));