const newUser = (args) => {
  const { id, name, role, department, phone, email, imageUrl } = args;

  const user = {
    id,
    name,
    role,
    department,
    imageUrl,
  };

  if (phone) {
    newUser.phone = phone;
  }
  if (email) {
    newUser.email = email;
  }

  return user;
};

export default newUser;
