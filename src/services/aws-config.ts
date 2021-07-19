const { AWS_ACCESS_KEY, AWS_SECRET_KEY, AWS_REGION } = process.env;

const AWS_CONFIG = {
  accessKeyId: AWS_ACCESS_KEY,
  secretAccessKey: AWS_SECRET_KEY,
  region: AWS_REGION,
};

export default AWS_CONFIG;
