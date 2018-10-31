import * as React from 'react';
import { NextContext } from 'next';

import { SingleItem } from '../components/SingleItem';

const Item: React.SFC<NextContext> = ({ query }) => (
  <>
    <SingleItem id={query.id} />
  </>
);

export default Item;
