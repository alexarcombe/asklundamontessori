import axios from 'axios';

const addUserToDB = (args) => {
  const { user, apiKey } = args;

  const options = {
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': apiKey,
    },
  };

  return axios.put(
    'https://hxxwvdzf3i.execute-api.eu-north-1.amazonaws.com/Prod/',
    { user },
    options
  );
};
export default addUserToDB;
