import S3 from 'react-aws-s3/dist/react-aws-s3';
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import PropTypes from 'prop-types';
import awsConfig from 'config/awsConfig';

const ReactS3Client = new S3(awsConfig);

export default function ImageField({ field, form, label }) {
  const { name, value } = field;
  const { getFieldMeta, setFieldValue } = form;
  const meta = getFieldMeta(name);
  const error = meta?.touched && !!meta?.error ? meta.error : '';

  const handleFileUpload = (e) => {
    const [image] = e.target.files;
    // TODO: Add error handler
    ReactS3Client.uploadFile(image).then((data) =>
      setFieldValue(name, data.location),
    );
  };

  return value ? (
    <>
      <img
        alt={`${name}-preview`}
        src={value}
      />
      <Button onClick={() => setFieldValue(name, '')}>Відмінити</Button>
    </>
  ) : (
    <FormLabel>
      {label}
      <input
        accept='image/jpg, image/jpeg, image/png, image/webp'
        name='advertisement-image'
        onChange={handleFileUpload}
        type='file'
      />
      {!!error && <FormHelperText error>{error}</FormHelperText>}
    </FormLabel>
  );
}

ImageField.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  form: PropTypes.shape({
    getFieldMeta: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
  }).isRequired,
  label: PropTypes.string.isRequired,
};
