import React, {Component, useEffect, useState} from "react";
import { Map, GeoJSON } from "react-leaflet";
import mapData from "./countries.json";
import "leaflet/dist/leaflet.css";
import "./MyMap.css";
import {compose} from "recompose";
import {inject, observer} from "mobx-react";



function MyMap({StatisticsStore}) {
  useEffect(() => {
    console.log(StatisticsStore.topCountries)
  }, []);


  const [color,setColor] = useState("#ffff00");
  const colors = ["green", "blue", "yellow", "orange", "grey"];
  const countryStyle = {
    fillColor: "red",
    fillOpacity: 1,
    color: "black",
    weight: 1,
  };

  const BishkekCoordinates = [42.88, 74.61];
  const zoom = 1;
  const minZoom = 1;
  const bounds = [
    [42.9785, 74.3939],
    [42.7843, 74.8455]
  ];
  const printMesssageToConsole = (event) => {
    console.log("Clicked");
  };

  const changeCountryColor = (event) => {
    event.target.setStyle({
      color: "green",
      fillColor: color,
      fillOpacity: 1,
    });
  };

  const onEachCountry =  (country, layer) => {
    const countryName = country.properties.ADMIN;
    layer.bindPopup(countryName);
    let rate = StatisticsStore.topCountries.find((c)=>countryName === c?.countryName)?.totalConfirmed ?? 0;
    let opacity = getStyle(parseInt(rate))
    console.log(rate);
    console.log(opacity);
    layer.options.fillOpacity = opacity; //0-1 (0.1, 0.2, 0.3)
    // const colorIndex = Math.floor(Math.random() * this.colors.length);
    // layer.options.fillColor = this.colors[colorIndex]; //0

    layer.on({
      click: changeCountryColor,
    });
  };

  const colorChange = (event) => {
    setColor( event.target.value);
  };


  return (
      <>
        {StatisticsStore.loading ? <p>Loading </p> : (
            <>

            { StatisticsStore.topCountries  && (
                <>
            <Map style={{ height: "50vh",width:"100%" }} zoom={2} id = "map"center={BishkekCoordinates} minZoom = {minZoom}  >
              <GeoJSON
                  style={countryStyle}
                  data={mapData.features}
                  onEachFeature={onEachCountry}
              />
            </Map>
          <input
          type="color"
          value={color}
          onChange={colorChange}
          />
                </>
              )}
            </>

        )}
      </>
  );

}

export default compose(
    inject('StatisticsStore')
)(observer(MyMap))


const rates = [
  {
    min:0,
    max:5000,
    opacity:0.2
  } ,
  {
    min:20000,
    max:40000,
    opacity:0.3
  },{
    min:40000,
    max:100000,
    opacity:0.5
  },{
    min:100000,
    max:300000,
    opacity:0.6
  },{
    min:300000,
    max:1000000,
    opacity:0.8
  },
  {
    min:300000,
    max:9999999999,
    opacity:1
  }
]

 function getStyle(rate){
  return rates.find(r => r.max > rate ).opacity ?? 0
}