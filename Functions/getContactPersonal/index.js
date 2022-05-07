const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient({ region: 'eu-north-1' });

exports.handler = async () => {
  let statusCode = '200';
  let body;
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  };

  var params = {
    RequestItems: {
      Personal: {
        Keys: [
          {
            id: '38b6927c-02ab-44b2-93cb-e4e10bf88b78',
          },
          {
            id: 'c4083278-bef0-43e1-906d-0d646a0d8e73',
          },
          {
            id: 'eab9159f-20fc-4550-ba48-f153cbac90a3',
          },
        ],
      },
    },
  };

  try {
    body = await docClient.batchGet(params).promise();
  } catch (err) {
    statusCode = '400';
    body = err.message;
  } finally {
    body = JSON.stringify(body);
  }
  return { statusCode, body, headers };
};
