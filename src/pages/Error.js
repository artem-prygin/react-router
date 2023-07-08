import React from 'react';
import { useRouteError } from 'react-router';

export default function Error() {
  const error = useRouteError();
  console.log(123);

  return (
      <h1>{error?.message}</h1>
  );
}
