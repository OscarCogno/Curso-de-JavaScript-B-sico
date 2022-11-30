let markers, map;

function initMap() {
  const posicion = {
    lat: -25.363,
    lng: 131.044,
  };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion,
  });

  markers.push(
    new google.maps.Marker({
      position: {
        lat: -31.76201305101096,
        lng: -60.479486016227746,
      },
      map,
      title: "Paraná",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: -25.66565979571821,
        lng: -54.450087941947686, 
      },
      map,
      title: "Cataratas del Iguazu",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: -5.260794008606429,
        lng: -34.98154039794456,
      },
      map,
      title: "Pipa",
    })
  );
}