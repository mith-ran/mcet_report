
import {get} from "./data.js";
let des=get();
console.log(des);
console.log("hi");
let html='';
des.forEach((element) => {
  console.log(element.value)
  html+=`<div class="container">
  <h2> Issue</h2>
  <h3>Description:${element.value}</h3>
  <h3>lattutude[${element.location.lat}]</h3>
  <h3>longitude[${element.location.lng}]</h3>
  </div>`
});

document.querySelector('.rep').innerHTML=html;
