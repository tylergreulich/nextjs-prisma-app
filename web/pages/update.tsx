import * as React from 'react';
import { NextContext } from 'next';

import { UpdateItem } from '../components/UpdateItem';

const Update: React.SFC<NextContext> = ({ query }) => (
  <>
    <UpdateItem id={query.id} />
  </>
);

export default Update;
