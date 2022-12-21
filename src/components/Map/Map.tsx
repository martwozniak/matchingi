import React, { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import "./map.css";

type Props = {};

export default function Map({}: Props) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(139.753);
  const [lat] = useState(35.6844);
  const [zoom] = useState(14);
  const [API_KEY] = useState("4lOMEJLMkq3nCLCp0FnT");
  useEffect(() => {
    if (map.current) return; //stops map from intializing more than once
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom,
    });
  });
  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}
