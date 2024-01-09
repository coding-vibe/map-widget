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

const DEFAULT_ZOOM = 6;
const INITIAL_COORDINATES = [49.0, 32.0];

export default function Map() {
  const { items } = useContext(AdvertisementContext);
  const [showAdvertisementList, setShowAdvertisementList] = useState(false);
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
          closeAdvertisementList={() => setShowAdvertisementList(false)}
          coordinates={item.coordinates}
          key={`${item.coordinates.lat}-${item.coordinates.lng}`}
          name={item.name}
          onClick={(coordinates) => {
            setSelectedMarkerCoords(coordinates);
          }}
        />
      ))}
      <AddAdvertisement />
      <div css={classes.panelWrap}>
        <PanelContainer>
          {!showAdvertisementList && selectedMarkerCoords ? (
            <SelectedAdvertisement
              openAdvertisementList={() => setShowAdvertisementList(true)}
              selectedMarkerCoords={selectedMarkerCoords}
              showAdvertisementList={showAdvertisementList}
            />
          ) : (
            <AdvertisementList />
          )}
        </PanelContainer>
      </div>
    </MapContainer>
  );
}
