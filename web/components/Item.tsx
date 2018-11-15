import * as React from 'react';
import Link from 'next/link';

import { ItemProps } from 'interfaces/shared/Item.interface';
import { ItemStyles } from './styles/ItemStyles';
import { Title } from './styles/Title';
import { PriceTag } from './styles/PriceTag';
import { formatMoney } from '../lib/formatMoney';

import { DeleteItem } from './DeleteItem';

export class Item extends React.Component<ItemProps, {}> {
  render() {
    const { id, title, price, description, image } = this.props;

    return (
      <ItemStyles>
        {image && <img src={image} alt={title} />}
        <Title>
          <Link href={{ pathname: '/item', query: { id } }}>
            <a>{title}</a>
          </Link>
        </Title>
        <PriceTag>{formatMoney(price)}</PriceTag>
        <p>{description}</p>
        <div className="buttonList" data-testId="buttonList">
          <Link href={{ pathname: 'update', query: { id } }}>
            <a>Edit</a>
          </Link>
          <button>Add to Cart</button>
          <DeleteItem id={id}>Delete This Item</DeleteItem>
        </div>
      </ItemStyles>
    );
  }
}
