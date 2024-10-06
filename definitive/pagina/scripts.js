// Crear un mapa
const map = L.map('map').setView([-16.2902, -64.6852], 5); // Coordenadas de Bolivia

// Capa base del mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);


// Cargar y mostrar el archivo GeoJSON
fetch('../data/map.geojson')  // Reemplaza con la ruta a tu archivo GeoJSON
    .then(response => response.json())
    .then(data => {
        // Añadir los puntos GeoJSON al mapa con marcadores
        L.geoJSON(data, {
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, {
                    radius: 3,   // Tamaño del marcador
                    fillColor: "red", // Color de relleno
                    color: "#000", // Color del borde
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 0.8
                }); 
            },
            onEachFeature: function (feature, layer) {
                // Mostrar información al hacer clic en el marcador
                layer.bindPopup(
                    `<b>Brillo:</b> ${feature.properties.brightness}<br>
                    <b>Fecha:</b> ${feature.properties.acq_date}<br>
                    <b>Hora:</b> ${feature.properties.acq_time}<br>
                    <b>FRP:</b> ${feature.properties.frp}`
                );
            }
        }).addTo(map);
    })
    .catch(error => console.error('Error al cargar el archivo GeoJSON:', error));