import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import bsCustomFileInput from 'bs-custom-file-input';
import verify from './verify';
import newUser from './newUser';
import deletePersonal from './deletePersonal';
import addImageS3 from './addImageS3';
import addUserDB from './addUserDB';
import getSignedUrl from './getSignedUrl';

function Personal() {
  const [personal, setPersonal] = useState([]);
  const [user, setUser] = useState('Ny Personal');
  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [department, setDepartment] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    bsCustomFileInput.init();
  }, []);

  useEffect(() => {
    axios
      .get('https://hxxwvdzf3i.execute-api.eu-north-1.amazonaws.com/Prod/')
      .then((res) => {
        setPersonal(res.data.Items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    // Default image url
    let imageUrl =
      'https://asklundamontessori.s3.eu-north-1.amazonaws.com/personal/example.jpg';
    const { errorsFound, error } = verify({ name, role, department, apiKey });
    setErrors(errorsFound);

    if (error) {
      return;
    }

    const id = userId === '' ? uuidv4() : userId;

    // Add image to s3 if there is one
    if (image !== '') {
      getSignedUrl({ name, image, apiKey })
        .then((res) => {
          const { signedRequest, url } = res.data;
          addImageS3({ signedRequest, image }).catch((err) =>
            alert('Something went wrong uploading image.')
          );
          imageUrl = url;
          const user = newUser({
            id,
            name,
            role,
            department,
            imageUrl,
            phone,
            email,
          });
          addUserDB({
            user,
            apiKey,
          })
            .then((res) => {
              setPersonal((prev) => {
                return [...prev, user];
              });
              alert(`${name} added.`);
              changeUser('Ny Personal');
              setApiKey('');
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          // Wrong api key
          console.log(err);
          setErrors({ apiKey: 'Wrong API key.' });
        });
    } else {
      const user = newUser({
        id,
        name,
        role,
        department,
        imageUrl,
        phone,
        email,
      });
      addUserDB({
        user,
        apiKey,
      })
        .then((res) => {
          setPersonal((prev) => {
            return [...prev, user];
          });
          alert(`${name} added.`);
          changeUser('Ny Personal');
          setApiKey('');
        })
        .catch((err) => {
          setErrors({ apiKey: 'Wrong API key.' });
        });
    }
  };

  const changeUser = (name) => {
    setUser(name);
    if (name === 'Ny Personal') {
      setName('');
      setRole('');
      setDepartment('');
      setPhone('');
      setEmail('');
      setUserId('');
    } else {
      const pers = personal.filter((pers) => pers.name === name)[0];
      setName(pers.name);
      setRole(pers.role);
      setDepartment(pers.department);
      if ((pers, phone)) {
        setPhone(pers.phone);
      } else {
        setPhone('');
      }
      if (pers.email) {
        setEmail(pers.email);
      } else {
        setEmail('');
      }
      setUserId(pers.id);
    }
  };

  return (
    <div className="App">
      <Container className="my-5">
        <Row>
          <Col lg={8} className="mx-auto">
            <h1 className="display-4 text-center">Personal</h1>
            <Form onSubmit={onSubmit}>
              <Form.Group>
                <Form.Control
                  as="select"
                  name="user"
                  value={user}
                  onChange={(e) => changeUser(e.target.value)}
                >
                  <option>Ny Personal</option>
                  {personal.map((pers) => (
                    <option key={pers.id}>{pers.name}</option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Namn:</Form.Label>
                <Form.Control
                  name="name"
                  value={name}
                  placeholder="Namn..."
                  onChange={(e) => setName(e.target.value)}
                  isInvalid={errors.name}
                />
                {errors.name && (
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                )}
              </Form.Group>

              <Form.Group>
                <Form.Label>Roll:</Form.Label>
                <Form.Control
                  name="role"
                  value={role}
                  placeholder="T.ex. Barnskötare – Montessoripedagog"
                  onChange={(e) => setRole(e.target.value)}
                  isInvalid={errors.role}
                />
                {errors.role && (
                  <Form.Control.Feedback type="invalid">
                    {errors.role}
                  </Form.Control.Feedback>
                )}
              </Form.Group>

              <Form.Group>
                <Form.Label>Avdelning:</Form.Label>
                <Form.Control
                  name="department"
                  value={department}
                  placeholder="Avdelning"
                  onChange={(e) => setDepartment(e.target.value)}
                  isInvalid={errors.department}
                />
                {errors.department && (
                  <Form.Control.Feedback type="invalid">
                    {errors.department}
                  </Form.Control.Feedback>
                )}
              </Form.Group>

              <Form.Group>
                <Form.Label>Telefon:</Form.Label>
                <Form.Control
                  name="phone"
                  value={phone}
                  placeholder="Bara nödvändigt för kontakt personer."
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  name="email"
                  value={email}
                  placeholder="Bara nödvändigt för kontakt personer"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.File
                  id="custom-file"
                  label="Custom file input"
                  custom
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>AWS API Key</Form.Label>
                <Form.Control
                  name="apiKey"
                  value={apiKey}
                  placeholder="Ange API key för att kunna lägga till personal."
                  onChange={(e) => setApiKey(e.target.value)}
                  isInvalid={errors.apiKey}
                ></Form.Control>
                {errors.apiKey && (
                  <Form.Control.Feedback type="invalid">
                    {errors.apiKey}
                  </Form.Control.Feedback>
                )}
              </Form.Group>

              <Button variant="primary" block type="submit">
                Submit
              </Button>

              <Button
                variant="danger"
                block
                onClick={() =>
                  deletePersonal({
                    userId,
                    apiKey,
                    personal,
                    setPersonal,
                    setApiKey,
                    changeUser,
                    setErrors,
                  })
                }
              >
                Delete
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Personal;
