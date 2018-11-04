import React from 'react';
import { Segment, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Home = () => (
  <Segment textAlign="center">
    <Header as="h1" textAlign="center">Welcome to your budget</Header>     
    <Link to="/budget">Get Started</Link>
  </Segment>
)

export default Home;
