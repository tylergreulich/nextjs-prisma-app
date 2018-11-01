import * as React from 'react';
import Link from 'next/link';
import { NavStyles } from './styles/NavStyles';
import { User } from './User';
import { Logout } from './Logout';

export const Navigation = () => (
  <User>
    {({ data: { me } }) => (
      <NavStyles>
        <Link href="/items">
          <a>Shop</a>
        </Link>
        {me && (
          <>
            <Link href="/sell">
              <a>Sell</a>
            </Link>
            <Link href="/orders">
              <a>Orders</a>
            </Link>
            <Link href="/me">
              <a>Account</a>
            </Link>
            <Logout />
          </>
        )}
        {!me && (
          <Link href="/register">
            <a>Login</a>
          </Link>
        )}
      </NavStyles>
    )}
  </User>
);
