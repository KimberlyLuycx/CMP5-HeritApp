var mymap = L.map('mapid').setView([51.217499, 4.421570], 11);

var CartoDB_Voyager = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 19
}).addTo(mymap);

var erfgoedvereniging = L.icon({
    iconUrl: '/images/marker_erfgoedvereniging.png',
    iconSize: [42, 69], // size of the icon
});

var museum = L.icon({
    iconUrl: '/images/marker_museum.png',
		iconSize: [42, 69], // size of the icon
});

var levensbeschouwelijk = L.icon({
    iconUrl: 'images/marker_levensbeschouwelijk.png',
		iconSize: [42, 69], // size of the icon
});

var centrum = L.icon({
    iconUrl: 'images/marker_centrum.png',
		iconSize: [42, 69], // size of the icon
});

var bibliotheek = L.icon({
    iconUrl: 'images/marker_bibliotheek.png',
		iconSize: [42, 69], // size of the icon
});

var archief = L.icon({
    iconUrl: 'images/marker_archief.png',
		iconSize: [42, 69], // size of the icon
});

var depot = L.icon({
    iconUrl: 'images/marker_depot.png',
		iconSize: [42, 69], // size of the icon
});
