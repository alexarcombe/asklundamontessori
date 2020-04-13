export default function verify(args) {
  const { name, role, department, apiKey } = args;
  let errorsFound = {};

  if (name === '') {
    errorsFound.name = 'Name is required.';
  }
  if (role === '') {
    errorsFound.role = 'Role is required.';
  }
  if (department === '') {
    errorsFound.department = 'Department is required.';
  }
  if (apiKey === '') {
    errorsFound.apiKey = 'API key is required.';
  }

  const error = Object.keys(errorsFound).length !== 0;

  return { errorsFound, error };
}
