import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import '../styles/globals.css';

const queryClient = new QueryClient();

const App = ({ Component, pageProps }) => {
  return (
    <main className='prose mx-auto max-w-7xl px-4 py-2 sm:px-8'>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </main>
  );
};

export default App;
