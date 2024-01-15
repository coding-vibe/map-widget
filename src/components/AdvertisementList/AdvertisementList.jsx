import { useContext, useMemo } from 'react';
import { useMapEvents } from 'react-leaflet';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import AdvertisementCard from 'components/AdvertisementCard';
import AdvertisementContext from 'contexts/AdvertisementContext';
import * as classes from './styles';

export default function AdvertisementList({ bounds, setBounds }) {
  console.log(bounds);

  const { items } = useContext(AdvertisementContext);
  const map = useMapEvents({
    moveend() {
      setBounds(map.getBounds());
    },
  });

  const displayedAdvertisements = useMemo(
    () =>
      items.filter(({ coordinates }) =>
        //  map.getBounds() is used for the calculation of map bounds on the first render, because 'load' event doesn't fire properly
        // eslint-disable-next-line react/prop-types
        bounds ? bounds.contains(coordinates) : map.getBounds(),
      ),
    [items, bounds, map],
  );

  return (
    <div css={classes.listWrap}>
      <Typography
        component='h2'
        css={classes.title}
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
          advertisement={ad}
          key={`${ad.coordinates.lat}-${ad.coordinates.lng}`}
        />
      ))}
    </div>
  );
}

AdvertisementList.propTypes = {
  bounds: PropTypes.shape({
    _northEast: {
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    },
    _southWest: {
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    },
  }).isRequired,
  setBounds: PropTypes.func.isRequired,
};
