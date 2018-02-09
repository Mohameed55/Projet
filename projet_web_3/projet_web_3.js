


    class marqueur {
        constructor(Lattitude, Longitude, titre) {

          this.Lattitude = Lattitude;
          this.Longitude = Longitude;
          this.titre = titre;
          

        }
      }

var mymap = L.map('mapid').setView([43.2969500,5.3810700], 13);
var cities = L.layerGroup();
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken:'pk.eyJ1IjoibW9oYW1lZDU1IiwiYSI6ImNqY3VrOGpxdTBxM3IycXBna21vcjlrdmgifQ.7V8tidwLvjwPkt9b-zhKlQ',
    layers: [cities]

}).addTo(mymap);

var baseMaps ;
    
    var overlayMaps = {
        "Cities": cities
    };

      var dataArray = [];
      d3.csv("/home/mohamed/Bureau/projet_web_3/data/bibliotheque.csv", function(data) {

        for (let i = 0; i < data.length; i++) {
        
            let marche = new marqueur (data[i].Lattitude, data[i].Longitude, data[i].titre);
               dataArray.push(marche);

               if (data[i].titre.indexOf("Service") === 0) {

                marche.addTo(cities);
                 
               }


              let titre = document.createElement("h3");
              titre.textContent = dataArray[i].titre;
      
              titre.bindPopup(cities);
      
        
        }

    
      });

      

      L.control.layers(baseMaps, overlayMaps).addTo(mymap);
