import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import * as ROUTES from '../constants/routes';

export default function Signup() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [firstname, setFirstname] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const isInvalid = firstname === '' || password === '' || emailAddress === '';
  const handlesignup = (event) => {
    event.preventDefault();

    firebase
    .auth()
    .createUserWithEmailAndPassword(emailAddress, password)
    .then((result) =>
    result.user
    .updateProfile({
      display:firstname,
      photoURL:Math.floor(Math.random()*5)+1,
    }).then(() => {
      history.push(ROUTES.BROWSE)
    })
    )
    .then((error) => {
      setFirstname('');
      setEmailAddress('');
      setPassword('');
      setError(error.message);
    } )
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>

          {error && <Form.Error data-testid="error">{error}</Form.Error>}
          <Form.Base onSubmit={handlesignup} method="POST">
            <Form.Input
              placeholder="First name"
              value={firstname}
              onChange={({ target }) => setFirstname(target.value)}
            />
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />

            <Form.Submit
              disabled={isInvalid}
              type="submit"
              data-testid="sign-in">
              Sign up
            </Form.Submit>
            <Form.Text>
              Already a user?<Form.Link to="/signin">Sign in Now.</Form.Link> 
            </Form.Text>
            <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
