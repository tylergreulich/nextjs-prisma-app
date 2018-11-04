import * as React from 'react';
import { Query } from 'react-apollo';
import Head from 'next/head';
import { PaginationStyles } from './styles/PaginationStyles';
import { PAGINATION_QUERY } from '../graphql/queries/PaginationQuery';
import { ErrorMessage } from './ErrorMessage';
import { perPage } from '../config';
import Link from 'next/link';

export const Pagination: React.SFC<{ page: number }> = ({ page }) => {
  return (
    <Query query={PAGINATION_QUERY}>
      {({ data, error, loading }) => {
        if (error) {
          return <ErrorMessage error={error} />;
        }

        if (loading || !data) {
          return <p>Loading...</p>;
        }

        const { count } = data.itemsConnection.aggregate;
        const pages = Math.ceil(count / perPage);

        return (
          <PaginationStyles>
            <Head>
              <title>
                Sick Fits! - Page {page} of {pages}
              </title>
            </Head>
            <Link
              prefetch={true}
              href={{
                pathname: 'items',
                query: { page: page - 1 }
              }}
            >
              <a className="prev" aria-disabled={page <= 1}>
                Prev
              </a>
            </Link>
            <p>
              Page {page} of {pages}
            </p>
            <p>{count} Items Total</p>
            <Link
              href={{
                pathname: 'items',
                query: { page: page + 1 }
              }}
            >
              <a className="prev" aria-disabled={page >= pages}>
                Next
              </a>
            </Link>
          </PaginationStyles>
        );
      }}
    </Query>
  );
};
