/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";
window.onload = function() {
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["ate", "pissed", "crushed", "broke"];
  let when = [
    "before class",
    "right on time",
    "when I finished",
    "under the car"
  ];

  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  document.querySelector("#excuse").innerHTML =
    randomWho + " " + randomWhat + " " + randomWhen;

  console.log(randomWho + " " + randomWhat + " " + randomWhen);
};
