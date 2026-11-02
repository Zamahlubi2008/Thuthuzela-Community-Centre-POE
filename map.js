/* ============================================================
   IKASI YOUTH CENTRE - Interactive map (Leaflet, open-source)
   Runs on about.html and contact.html
   ============================================================ */
(function () {
  'use strict';
  const mapEl = document.getElementById('map');
  if (!mapEl || typeof L === 'undefined') return;

  const centre = [-34.0350, 18.6800]; // 12 Mendi Avenue, Khayelitsha, Cape Town
  const map = L.map(mapEl, { scrollWheelZoom: false }).setView(centre, 15);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  const marker = L.marker(centre).addTo(map);
  marker.bindPopup(
    '<strong>Ikasi Youth Centre</strong><br>12 Mendi Avenue,<br>Khayelitsha, Cape Town, 7784'
  ).openPopup();

  // Re-enable scroll zoom after first interaction so the page does not trap scrolling
  map.on('click', function () { map.scrollWheelZoom.enable(); });
})();
