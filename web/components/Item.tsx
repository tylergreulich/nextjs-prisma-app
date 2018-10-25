import * as React from 'react';
import Link from 'next/link';

import { ItemProps } from '../graphql/schemaTypes';
import { ItemStyles } from './styles/ItemStyles';
import { Title } from './styles/Title';
import { PriceTag } from './styles/PriceTag';
import { formatMoney } from '../lib/formatMoney';

export class Item extends React.Component<ItemProps, {}> {
  render() {
    const { id, title, price, description, image } = this.props;

    return (
      <ItemStyles>
        {image && <img src={image} alt={title} />}
        <Title>
          <Link
            href={{
              pathname: '/item',
              query: { id }
            }}
          >
            <a>{title}</a>
          </Link>
        </Title>
        <PriceTag>{formatMoney(price)}</PriceTag>
        <p>{description}</p>
        <div className="buttonList">
          <Link
            href={{
              pathname: 'update',
              query: { id }
            }}
          >
            <a>Edit</a>
          </Link>
          <button>Add to Cart</button>
          <button>Delete</button>
        </div>
      </ItemStyles>
    );
  }
}
