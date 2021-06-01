import AWS from 'aws-sdk';

const { AWS_ACCESS_KEY, AWS_SECRET_KEY, AWS_REGION } = process.env;
const SES_CONFIG = {
  accessKeyId: AWS_ACCESS_KEY,
  secretAccessKey: AWS_SECRET_KEY,
  region: AWS_REGION,
};
const AWS_SES = new AWS.SES(SES_CONFIG);

export const sendEmail = (sender: string, receiver: string, header: string, data: string) => {
  const params = {
    Source: sender,
    Destination: {
      ToAddresses: [receiver],
    },
    ReplyToAddresses: [],
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: data,
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: header,
      },
    },
  };

  return AWS_SES.sendEmail(params).promise();
};

export const sendTemplateEmail = (sender: string, receiver: string, template: string, data: string) => {
  const params = {
    Source: sender,
    Template: template,
    Destination: {
      ToAddresse: [receiver],
    },
    TemplateData: data,
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  return AWS_SES.sendTemplatedEmail(params).promise();
};
