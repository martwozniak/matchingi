import React, { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl"; // eslint-disable-line import/no-webpack-loader-syntax

import { useRouter } from "next/router";
//mapboxgl.accessToken = "4lOMEJLMkq3nCLCp0FnT";

export default function Map() {
  const { locale, locales, defaultLocale } = useRouter();

  let defLng = 21.02;
  let defLat = 52.23;
  // get location coordinates from db
  if (locale == "en") {
    defLng = 21.02;
    defLat = 52.23;
  }

  //const mapContainer = useRef(null);
  //const mapContainer = useRef<HTMLElement | null>(null);
  //const map = useRef(null);
  //const map = useRef<mapboxgl.Map | null>(null);
  const mapContainer = useRef<HTMLDivElement | string | any | null>(null);
  // Types TBD
  const map = useRef<maplibregl.Map | null>(null);
  const [lng] = useState(defLng);
  const [lat] = useState(defLat);
  const [zoom] = useState(5);
  const [API_KEY] = useState("4lOMEJLMkq3nCLCp0FnT");

  useEffect(() => {
    if (map.current) return; //stops map from intializing more than once
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2-dark/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom,
    });
    map.current.addControl(new maplibregl.NavigationControl(), 'top-right');

    new maplibregl.Marker({ color: "#FF0000" })
      .setLngLat([139.7525, 35.6846])
      .addTo(map.current);

    map.current.addSource('earthquakes', {
      type: 'geojson',
      // Point to GeoJSON data. This example visualizes all M1.0+ earthquakes
      // from 12/22/15 to 1/21/16 as logged by USGS' Earthquake hazards program.
      data:
        'https://maplibre.org/maplibre-gl-js-docs/assets/earthquakes.geojson',
      cluster: true,
      clusterMaxZoom: 50, // Max zoom to cluster points on
      clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
    });
  });

  // ! TODO: Change height of the website in normal way
  return (
    <div className="map-wrap h-full ">
      <div
        ref={mapContainer}
        className="map-container max-h-80vh max-w-screen h-[95vh] w-full w-[50vw]"
      >

      </div>
    </div>
  );
}
