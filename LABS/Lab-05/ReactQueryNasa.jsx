import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Example } from './Example';

const queryClient = new QueryClient();

export default function ReactQueryNasa() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}