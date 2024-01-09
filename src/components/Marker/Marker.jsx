import { useMemo } from 'react';
import { Marker as LeafletMarker, Popup } from 'react-leaflet';
import L from 'leaflet';
import PropTypes from 'prop-types';

const markerIcon = L.icon({
  iconUrl: './public/house.png',
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -38],
});

export default function Marker({
  closeAdvertisementList,
  coordinates,
  name,
  onClick,
}) {
  const eventHandlers = useMemo(
    () => ({
      click(e) {
        // Used because `react-leaflet` doesn`t provide `bubblingMouseEvents` property defined in leaflet
        L.DomEvent.stopPropagation(e);
        closeAdvertisementList();
        onClick(coordinates);
      },
    }),
    [closeAdvertisementList, coordinates, onClick],
  );

  return (
    <LeafletMarker
      eventHandlers={eventHandlers}
      icon={markerIcon}
      position={[coordinates.lat, coordinates.lng]}>
      <Popup>{name}</Popup>
    </LeafletMarker>
  );
}

Marker.propTypes = {
  closeAdvertisementList: PropTypes.func.isRequired,
  coordinates: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
