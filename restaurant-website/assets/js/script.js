document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const map = L.map("map", {
      center: [60.1696, 24.9384],
      zoom: 13,
      dragging: false,
      zoomControl: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      boxZoom: false,
      keyboard: false,
      tap: false,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([60.1699, 24.9384]).addTo(map);
  }, 100);
});
