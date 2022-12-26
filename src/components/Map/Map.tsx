import React, { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { useRouter } from "next/router";
//mapboxgl.accessToken = "4lOMEJLMkq3nCLCp0FnT";

export default function Map() {
  const { locale, locales, defaultLocale } = useRouter();

  let defLng = 139.753;
  let defLat = 35.6844;

  // if (locale == "en") {
  //   defLng = 15.55;
  // }

  //const mapContainer = useRef(null);
  //const mapContainer = useRef<HTMLElement | null>(null);
  //const map = useRef(null);
  //const map = useRef<mapboxgl.Map | null>(null);
  const mapContainer = useRef<HTMLDivElement | string | any | null>(null);
  // Types TBD
  const map = useRef<maplibregl.Map | null>(null);
  const [lng] = useState(defLng);
  const [lat] = useState(defLat);
  const [zoom] = useState(12);
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
  // ! TODO: Change height of the website in normal way
  return (
    <div className="map-wrap h-full ">
      <div
        ref={mapContainer}
        className="map-container max-h-80vh max-w-screen h-[95vh] w-full w-[50vw]"
      />
    </div>
  );
}
