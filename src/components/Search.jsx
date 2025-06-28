import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import "leaflet-geosearch/assets/css/leaflet.css";

const SearchControl = ({ onLocationFound }) => {
  const map = useMap();

  useEffect(() => {
    const provider = new OpenStreetMapProvider();

    const searchControl = new GeoSearchControl({
      provider,
      style: "bar",
      showMarker: true,
      showPopup: false,
      autoClose: true,
      retainZoomLevel: false,
      animateZoom: true,
      keepResult: true,
      searchLabel: "Wyszukaj miejsce",
    });

    map.addControl(searchControl);

    map.on("geosearch/showlocation", (result) => {
      const { x: longitude, y: latitude } = result.location;
      onLocationFound({ latitude, longitude });
    });

    return () => {
      map.removeControl(searchControl);
    };
  }, [map, onLocationFound]);

  return null;
};

export default SearchControl;
