import React from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const NoMatch = () => (
  <div>
    <Header as="h1" textAlign="center">404</Header>
    <Link to="/">Go Home</Link>
  </div>
)

export default NoMatch;
