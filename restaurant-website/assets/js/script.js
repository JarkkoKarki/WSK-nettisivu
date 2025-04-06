document.addEventListener("DOMContentLoaded", () => {
  // Delay map initialization to ensure proper rendering
  setTimeout(() => {
    // Initialize the map
    const map = L.map("map", {
      center: [60.1696, 24.9384], // Replace with your restaurant's coordinates
      zoom: 13,
      dragging: false, // Disable dragging
      zoomControl: false, // Disable zoom controls
      scrollWheelZoom: false, // Disable zooming with the scroll wheel
      doubleClickZoom: false, // Disable zooming with double-click
      boxZoom: false, // Disable box zoom
      keyboard: false, // Disable keyboard controls
      tap: false, // Disable touch controls
    });

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add a marker for the restaurant (optional)
    L.marker([60.1699, 24.9384]) // Replace with your restaurant's coordinates
      .addTo(map);
  }, 100); // Delay initialization by 100ms
});
