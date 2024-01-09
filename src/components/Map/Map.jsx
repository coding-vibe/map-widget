import { useContext, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import AddAdvertisement from 'components/AddAdvertisement';
import AdvertisementList from 'components/AdvertisementList';
import Marker from 'components/Marker';
import PanelContainer from 'components/PanelContainer';
import SelectedAdvertisement from 'components/SelectedAdvertisement';
import AdvertisementContext from 'contexts/AdvertisementContext';
import 'leaflet/dist/leaflet.css';
import * as classes from './styles';

const DEFAULT_ZOOM = 10;
const INITIAL_COORDINATES = [50.4504, 30.5245];

export default function Map() {
  const { items } = useContext(AdvertisementContext);
  const [selectedMarkerCoords, setSelectedMarkerCoords] = useState(null);

  return (
    <MapContainer
      center={INITIAL_COORDINATES}
      css={classes.map}
      zoom={DEFAULT_ZOOM}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {items.map((item) => (
        <Marker
          coordinates={item.coordinates}
          key={`${item.coordinates.lat}-${item.coordinates.lng}`}
          name={item.name}
          onClick={(coordinates) => {
            setSelectedMarkerCoords(coordinates);
          }}
        />
      ))}
      <AddAdvertisement />
      <PanelContainer css={classes.panelContainer}>
        {selectedMarkerCoords ? (
          <SelectedAdvertisement
            onClose={() => setSelectedMarkerCoords(null)}
            selectedMarkerCoords={selectedMarkerCoords}
          />
        ) : (
          <AdvertisementList />
        )}
      </PanelContainer>
    </MapContainer>
  );
}
