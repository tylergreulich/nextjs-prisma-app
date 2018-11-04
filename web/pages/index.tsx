import * as React from 'react';
import { Items } from '../components/Items';

const Home: React.SFC<any> = ({ query }) => (
  <>
    <Items page={parseFloat(query.page) || 1} />
  </>
);

export default Home;
