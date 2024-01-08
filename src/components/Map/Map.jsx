import { useContext, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import AddAdvertisement from 'components/AddAdvertisement';
import AdvertisementList from 'components/AdvertisementList';
import SelectedAdvertisement from 'components/SelectedAdvertisement';
import Marker from 'components/Marker';
import PanelContainer from 'components/PanelContainer';
import AdvertisementContext from 'contexts/AdvertisementContext';
import 'leaflet/dist/leaflet.css';
import * as classes from './styles';

const DEFAULT_ZOOM = 6;
const INITIAL_COORDINATES = [49.0, 32.0];

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
          key={`${item.coordinates.lat}-${item.coordinates.lng}`}
          coordinates={item.coordinates}
          name={item.name}
          onClick={(coordinates) => {
            setSelectedMarkerCoords(coordinates);
          }}
        />
      ))}
      <AddAdvertisement />
      <div css={classes.panelWrap}>
        <PanelContainer>
          {selectedMarkerCoords ? (
            <SelectedAdvertisement
              selectedMarkerCoords={selectedMarkerCoords}
            />
          ) : (
            <AdvertisementList />
          )}
        </PanelContainer>
      </div>
    </MapContainer>
  );
}
