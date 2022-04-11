async function loadData() {
    const data = await fetch("https://raw.githubusercontent.com/VitaliyPolyashov/classes/master/map/data.json");
    const coords = await data.json();
    console.log(coords);
    const list = document.querySelector('#list');

    const newCoords = coords.filter(function(item) {
        return item.id <= 2;
    })

    const listOfBlocks = newCoords.map(function(item) {
        const block = document.createElement('div');
        block.innerText = item.name;
        block.addEventListener('click', function() {
            onSelect(item);
        });
        return block;
    });



    listOfBlocks.forEach(function(item) {
        list.append(item);
    });
}

function onSelect(item) {
    const point = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [item.latitude, item.longitude]
        },
        properties: {
            hintContent: item.name
        }
    });
    window.mapObj.geoObjects.removeAll();
    window.mapObj.geoObjects.add(point);
}
loadData();

ymaps.ready(function() {
    const map = new ymaps.Map("map", {
        center: [53.89, 27.56],
        zoom: 10
    }, {});
    window.mapObj = map;
});

navigator.geolocation.getCurrentPosition(function(response) {
    const data = response.coords;
    console.log(data);

    const point = new ymaps.Placemark([data.latitude, data.longitude],
        {
            balloonContent: 'Моя позиция!'
        });
        window.mapObj.geoObjects.add(point);

}, function() {
    alert('Геолокация недоступна');
});