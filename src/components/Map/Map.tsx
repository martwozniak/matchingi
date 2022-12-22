import React, { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl"; // eslint-disable-line import/no-webpack-loader-syntax

//mapboxgl.accessToken = "4lOMEJLMkq3nCLCp0FnT";

export default function Map() {
  //const mapContainer = useRef(null);
  //const mapContainer = useRef<HTMLElement | null>(null);
  //const map = useRef(null);
  //const map = useRef<mapboxgl.Map | null>(null);
  const mapContainer = useRef<HTMLDivElement | string | any | null>(null);
  // Types TBD
  const map = useRef<maplibregl.Map | null>(null);
  const [lng] = useState(139.753);
  const [lat] = useState(35.6844);
  const [zoom] = useState(14);
  const [API_KEY] = useState("4lOMEJLMkq3nCLCp0FnT");

  useEffect(() => {
    if (map.current) return; //stops map from intializing more than once
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2-dark/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom,
    });
  });
  // TODO: Change height of the website in normal way
  return (
    <div className="map-wrap h-full ">
      <div ref={mapContainer} className="map-container h-[90vh]" />
    </div>
  );
}
