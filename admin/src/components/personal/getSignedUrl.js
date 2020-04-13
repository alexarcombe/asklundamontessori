import axios from 'axios';

const getSignedUrl = async (args) => {
  const { name, image, apiKey } = args;

  // Set filename and filetype for s3
  const fileName =
    name.replace(' ', '').toLowerCase() + '.' + image.name.split('.')[1];
  const fileType = image.type;

  const body = { fileName, fileType };

  let options = {
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': apiKey,
    },
  };

  return axios.post(
    'https://hxxwvdzf3i.execute-api.eu-north-1.amazonaws.com/Prod/',
    body,
    options
  );
};

export default getSignedUrl;
