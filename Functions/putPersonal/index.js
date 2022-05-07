const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient({ region: 'eu-north-1' });

exports.handler = async (event) => {
  let body;
  let statusCode = '200';
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  };

  const { user } = JSON.parse(event.body);

  const params = {
    TableName: 'Personal',
    Item: user,
  };

  try {
    body = await docClient.put(params).promise();
  } catch (err) {
    statusCode = '400';
    body = err.message;
  } finally {
    body = JSON.stringify(body);
  }

  return { statusCode, body, headers };
};
