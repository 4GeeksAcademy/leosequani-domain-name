/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function domainmaker() {
  let pronoun = ["the", "our", "he", "her"];
  let adj = ["great", "big", "small", "average"];
  let noun = ["jogger", "racoon", "car", "pole"];
  let end = [".com", ".net", ".org", ".edu"];
  let count = 0;

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < end.length; l++) {
          count += 1;
          document.getElementById(
            "domainstext"
          ).innerHTML += `<div>${count}. ${pronoun[i]}${adj[j]}${noun[k]}${end[l]}</div>`;
        }
      }
    }
  }
  return;
}
window.onload = function() {
  domainmaker();
};
