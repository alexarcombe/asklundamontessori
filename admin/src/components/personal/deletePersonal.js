import axios from 'axios';

const deletePersonal = (args) => {
  const {
    userId,
    apiKey,
    personal,
    setPersonal,
    changeUser,
    setErrors,
    setApiKey,
  } = args;
  setErrors({});

  // Personal got to be selected.
  if (userId === '') {
    alert('Must select a personal to delete.');
    return false;
  }

  let options = {
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': apiKey,
    },
  };

  axios
    .delete(
      `https://hxxwvdzf3i.execute-api.eu-north-1.amazonaws.com/Prod/personal/${userId}`,
      options
    )
    .then((res) => {
      const filtered = personal.filter((pers) => pers.id !== userId);
      setPersonal(filtered);
      setApiKey('');
      changeUser('Ny Personal');
    })
    .catch((err) => {
      setErrors({ apiKey: 'Wrong API key.' });
    });
};

export default deletePersonal;
