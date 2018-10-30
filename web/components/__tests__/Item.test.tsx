import * as React from 'react';

import { render } from 'react-testing-library';

import { Item } from '../Item';

const fakeItem = {
  id: 'abc123',
  title: 'A cool item',
  price: 5000,
  description: 'This item is really cool!',
  image: 'dog.jpg',
  largeImage: 'largedog.jpg'
};

describe('<Item />', () => {
  it('renders and matches the snapshots', () => {
    const { getByAltText, getByText } = render(<Item item={fakeItem} />);
    const image = getByAltText(fakeItem.title) as HTMLImageElement;
    const priceTag = getByText('$50') as HTMLSpanElement;
    const title = getByText(fakeItem.title) as HTMLAnchorElement;

    expect(image).toMatchSnapshot();
    expect(priceTag).toMatchSnapshot();
    expect(title).toMatchSnapshot();
  });

  it('renders the buttons properly', () => {
    const { getByTestId } = render(<Item item={fakeItem} />);
    const buttonList = getByTestId('buttonList');
    expect(buttonList.children).toHaveLength(3);
  });
});
