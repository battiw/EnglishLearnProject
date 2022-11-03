import Express from "express";
import fs from "fs";
import { text, numberRandom } from "./library/arr.js";
import { libararyOut } from "./library/libararyOut.js";

import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log(__filename);
console.log(__dirname);

// import { routerUser } from './resources/users/user.router';
// import { boardRouter } from './resources/board/board.router';

const app = Express();
const textParser = Express.text({ type: "text/html" });

app.use(Express.json());

app.use(Express.static(__dirname));

app.get("/allTXT", (req, res) => {
  console.log("запрос  в сервере");
  console.log(req.body);
  console.log(req.method);

  let rantext = text();

  res.setHeader("Content-Type", "text/html");
  res.status(200);
  res.send(rantext);
});

app.post("/textengl", textParser, (req, res) => {
  console.log(numberRandom);
  let outBody = req.body;
  let outQuest = libararyOut(numberRandom);
  console.log(req.body);
  console.log(outQuest);
  let time = new Date();
  if (outBody == outQuest) {
    fs.appendFile(
      "resultLog.log",
      time + "==>" + outBody + " ==> " + "Correctly\n",
      function (error) {
        if (error) throw error;
      }
    );
    console.log("OK");
    res.setHeader("Content-Type", "text/html");
    res.status(200);
    res.send("Correctly\n");
  } else {
    fs.appendFile(
      "resultLog.log",
      time + "==>" + outBody + " ==> " + "Wrong\n",
      function (error) {
        if (error) throw error;
      }
    );
    res.setHeader("Content-Type", "text/html");
    res.status(200);
    res.send("Wrong\n");
  }
});

// app.use('/users', routerUser);

// app.use('/boards', boardRouter);

export { app };
