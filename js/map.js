/**
 * Created by Mateusz on 04.09.2016.
 */
function initMap() {
     var myLatLng=  {lat: 52.2319891, lng: 21.0047934};
    var myContent= '<b>Zakład Optyczny Test</b> </br>'+
            'ul. Przykładowa </br>' +
            '11-222 Przykładowo';
    var iconBase = 'img/';
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 17,
        styles: [
         {stylers: [
                    { hue: '#C0C0C0' },
                    { saturation: -100}
                ]
            }]
    });
    var infowindow = new google.maps.InfoWindow({
        content: myContent
    });
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: iconBase + 'map_glass.png'
    });
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });
    infowindow.open(map,marker);
}