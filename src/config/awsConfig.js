const awsConfig = {
  bucketName: import.meta.env.VITE_AWS_BUCKET_NAME,
  region: import.meta.env.VITE_AWS_REGION,
  accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY,
  secretAccessKey: import.meta.env.VITE_AWS_SECRET_KEY,
  s3Url: import.meta.env.VITE_AWS_S3_URL,
};

export default awsConfig;
