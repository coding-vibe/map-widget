/* eslint-disable react/prop-types */
import { useContext } from 'react';
import AdvertisementCard from 'components/AdvertisementCard';
import AdvertisementContext from 'contexts/AdvertisementContext';
import * as classes from './styles';

export default function SelectedAdvertisement({ selectedMarkerCoords }) {
  const { items } = useContext(AdvertisementContext);
  const selectedAdvertisement = items.find(
    (item) =>
      item.coordinates.lat === selectedMarkerCoords.lat &&
      item.coordinates.lng === selectedMarkerCoords.lng,
  );

  if (!selectedAdvertisement) {
    throw new Error('An advertisement not found');
  }

  return (
    <AdvertisementCard
      advertisement={selectedAdvertisement}
      css={classes.card}
    />
  );
}
