import { useContext, useState } from 'react';
import {
  Marker,
  MapContainer,
  Popup,
  TileLayer,
  useMapEvents,
} from 'react-leaflet';
import LocationContext from 'contexts/LocationContext';
import Modal from 'components/Modal';

function LocationMarker() {
  const [coord, setCoords] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const map = useMapEvents({
    click(e) {
      setIsOpen(true);
      setCoords(e.latlng);
    },
  });

  return (
    <Modal
      coordinates={coord}
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    />
  );
}

export default function Map() {
  const { items } = useContext(LocationContext);

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: '500px', width: '500px' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {items.map((item) => (
        <Marker
          key={item.coordinates}
          position={[item.coordinates.lat, item.coordinates.lng]}>
          <Popup>
            <div>
              <span>Назва: {item.name}</span>
              <span>Опис: {item.description}</span>
            </div>
          </Popup>
        </Marker>
      ))}
      <LocationMarker />
    </MapContainer>
  );
}
