var AWS = require('aws-sdk');

AWS.config.update({
  region: 'eu-north-1', // Put your aws region here
  accessKeyId: process.env.AWSAccessKeyId,
  secretAccessKey: process.env.AWSSecretKey,
});

const S3_BUCKET = process.env.S3_BUCKET;

exports.handler = async (event) => {
  let body;
  let statusCode = '200';
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  };

  const s3 = new AWS.S3();
  const { fileName, fileType } = JSON.parse(event.body);
  const bucket_path = S3_BUCKET;
  const bucket = bucket_path.split('/')[0];

  const s3Params = {
    Bucket: bucket_path,
    Key: fileName,
    Expires: 600,
    ContentType: fileType,
    ACL: 'public-read',
  };

  // Make a request to the S3 API to get a signed URL which we can use to upload our file
  try {
    const data = s3.getSignedUrl('putObject', s3Params);
    body = {
      signedRequest: data,
      url: `https://${bucket}.s3.eu-north-1.amazonaws.com/personal/${fileName}`,
    };
  } catch (err) {
    statusCode = '400';
    body = err.message;
  } finally {
    body = JSON.stringify(body);
  }

  return { statusCode, body, headers };
};
