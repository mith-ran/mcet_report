
import {description_list,update} from './data.js';


let selectedLocation = null;
const map = L.map('map').setView([10.654450394704826, -282.96283721923834], 13); // Fixed invalid longitude

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const marker = L.marker([10.654450394704826, -282.96283721923834], { draggable: true }).addTo(map);
marker.on('dragend', function (e) {
  selectedLocation = e.target.getLatLng();
});

function submitReport() {
  const description = document.getElementById('description').value;
  if (!description || !selectedLocation) {
    alert('Please provide a description and select a location.');
    return;
  }

  
 

  console.log('Report submitted:', {
    description,
    location: selectedLocation
  });

  alert('Report submitted successfully!');
  document.querySelector('.mar').innerHTML = `${description}`;
  console.log(description_list);
  update(description,selectedLocation);
}

document.querySelector('.but').addEventListener('click',function(){
  window.open('normal/form.html');
})

document.querySelector('.sum').addEventListener('click', function () {
  submitReport();
});
document.querySelector('.button').addEventListener('click', function () {
  window.open('dashboard.html');
});
