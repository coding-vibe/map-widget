import { useContext } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import AdvertisementCard from 'components/AdvertisementCard';
import AdvertisementContext from 'contexts/AdvertisementContext';
import * as classes from './styles';

export default function SelectedAdvertisement({
  onClose,
  selectedMarkerCoords,
}) {
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
    <div css={classes.cardWrap}>
      <AdvertisementCard advertisement={selectedAdvertisement} />
      <Stack
        css={classes.stack}
        direction='row'
        spacing={2}>
        <Button
          onClick={onClose}
          startIcon={<ArrowBackIcon />}
          variant='outlined'>
          Назад
        </Button>
      </Stack>
    </div>
  );
}

SelectedAdvertisement.propTypes = {
  onClose: PropTypes.func.isRequired,
  selectedMarkerCoords: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
};
