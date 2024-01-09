/* eslint-disable react/prop-types */
import S3 from 'react-aws-s3/dist/react-aws-s3';
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';

// TODO: Move to separate file
const config = {
  bucketName: import.meta.env.VITE_AWS_BUCKET_NAME,
  region: import.meta.env.VITE_AWS_REGION,
  accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY,
  secretAccessKey: import.meta.env.VITE_AWS_SECRET_KEY,
  s3Url: import.meta.env.VITE_AWS_S3_URL,
};

const ReactS3Client = new S3(config);

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
        alt={`${name}-preview `}
        src={value}
      />
      <Button onClick={() => setFieldValue(name, '')}>Відмінити</Button>
    </>
  ) : (
    <FormLabel>
      {label}
      <input
        //   Add accept attribute
        name='advertisement-image'
        onChange={handleFileUpload}
        type='file'
      />
      {!!error && <FormHelperText error>{error}</FormHelperText>}
    </FormLabel>
  );
}
