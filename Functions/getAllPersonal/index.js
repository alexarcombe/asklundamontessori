const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient({ region: 'eu-north-1' });

exports.handler = async () => {
  let body;
  let statusCode = '200';
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  };

  const params = {
    TableName: 'Personal',
  };

  try {
    body = await docClient.scan(params).promise();
  } catch (err) {
    statusCode = '400';
    body = err.message;
  } finally {
    body = JSON.stringify(body);
  }

  return { statusCode, body, headers };
};
