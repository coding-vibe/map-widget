import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

export default function AdvertisementCard({ advertisement, className }) {
  const { coordinates, name, description, image } = advertisement;

  return (
    <Card
      className={className}
      key={coordinates}
      sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          alt={name}
          component='img'
          height='140'
          image={image}
        />
        <CardContent>
          <Typography
            component='div'
            gutterBottom
            variant='h5'>
            {name}
          </Typography>
          <Typography
            color='text.secondary'
            variant='body2'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

AdvertisementCard.defaultProps = {
  className: null,
};

AdvertisementCard.propTypes = {
  advertisement: PropTypes.shape({
    coordinates: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  className: PropTypes.string,
};
