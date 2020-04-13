import axios from 'axios';

const addImageS3 = (args) => {
  const { signedRequest, image } = args;

  const options = {
    headers: {
      'Content-Type': image.Type,
    },
  };

  return axios.put(signedRequest, image, options);
};

export default addImageS3;
