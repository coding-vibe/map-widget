import { useContext, useMemo, useState } from 'react';
import { useMapEvents } from 'react-leaflet';
import AdvertisementCard from 'components/AdvertisementCard';
import AdvertisementContext from 'contexts/AdvertisementContext';
import { Typography } from '@mui/material';
import * as classes from './styles';

export default function AdvertisementList() {
  const { items } = useContext(AdvertisementContext);
  const [bounds, setBounds] = useState(null);
  const map = useMapEvents({
    moveend() {
      setBounds(map.getBounds());
    },
  });

  const displayedAdvertisements = useMemo(
    () =>
      items.filter(({ coordinates }) =>
        //  map.getBounds() is used for the calculation of map bounds on the first render, because 'load' event doesn't fire properly
        bounds ? bounds.contains(coordinates) : map.getBounds(),
      ),
    [items, bounds, map],
  );

  return (
    <div css={classes.listWrap}>
      <Typography
        component='h2'
        css={{ textAlign: 'center' }}
        variant='h4'>
        Знайдено {displayedAdvertisements.length} оголошень
      </Typography>
      <Typography
        component='span'
        variant='body2'>
        *Для подачі оголошення оберіть місце на карті та заповніть форму
      </Typography>
      {displayedAdvertisements.map((ad) => (
        <AdvertisementCard
          key={`${ad.coordinates.lat}-${ad.coordinates.lng}`}
          advertisement={ad}
        />
      ))}
    </div>
  );
}
