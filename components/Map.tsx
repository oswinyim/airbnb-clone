import { useState } from "react";
import { Map as MapGL, Marker } from "react-map-gl";
import { getCenter } from "geolib";
import "mapbox-gl/dist/mapbox-gl.css";
interface SearchResult {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: number;
  lat: number;
  long: number;
}

interface MapProps {
  searchResults?: SearchResult[];
}
const Map = ({ searchResults }: MapProps) => {
  const coordinates = searchResults?.map((searchResult) => ({
    latitude: searchResult.lat,
    longitude: searchResult.long,
  }));
  const center = getCenter(coordinates || []);
  const [viewState, setViewState] = useState({
    longitude: center === false ? 0 : center.longitude,
    latitude: center === false ? 0 : center.latitude,
    zoom: 7.5,
  });

  return (
    <MapGL
      {...viewState}
      mapStyle="mapbox://styles/oswinyim/cl9p6h8os001h14lmmhgqnzyv"
      mapboxAccessToken={process.env.mapboxKey}
      style={{ width: "100%", height: "100%" }}
      onMove={(evt) => setViewState(evt.viewState)}
    >
      {searchResults?.map((searchResult, index) => (
        <div key={index}>
          <Marker
            longitude={searchResult.long}
            latitude={searchResult.lat}
            offset={[-20, -10]}
          >
            <p
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
              role="img"
            >
              🚩
            </p>
          </Marker>
        </div>
      ))}
    </MapGL>
  );
};

export default Map;
