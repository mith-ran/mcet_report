import { sent_req } from "../frond_end/req.js";
sent_req([{name:"ko"}]);
import {get} from "./data.js";
let des=get();

let html='';
des.forEach((element) => {
  
  html+=`<div class="container">
  <h2> Issue</h2>
  <h3>Description:${element.value}</h3>
  <h3>lattutude[${element.location.lat}]</h3>
  <h3>longitude[${element.location.lng}]</h3>
  </div>`
});

document.querySelector('.rep').innerHTML=html;
