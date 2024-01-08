import { useMemo } from 'react';
import L from 'leaflet';
import { Marker as LeafletMarker, Popup } from 'react-leaflet';

const markerIcon = L.icon({
  iconUrl: './house.png',
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -38],
});

// eslint-disable-next-line react/prop-types
export default function Marker({ coordinates, name, onClick }) {
  const eventHandlers = useMemo(
    () => ({
      click(e) {
        // Used because `react-leaflet` doesn`t provide `bubblingMouseEvents` property defined in leaflet
        L.DomEvent.stopPropagation(e);
        onClick(coordinates);
      },
    }),
    [coordinates, onClick],
  );

  return (
    <LeafletMarker
      icon={markerIcon}
      // eslint-disable-next-line react/prop-types
      position={[coordinates.lat, coordinates.lng]}
      eventHandlers={eventHandlers}>
      <Popup>{name}</Popup>
    </LeafletMarker>
  );
}
