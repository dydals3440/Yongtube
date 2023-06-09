import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import SearchHeader from './components/SearchHeader';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { YoutubeApiContextProvider } from './context/YoutubeApiContext';

// queryClientProvider를 통해 useQuery를 Outlet 어디서든 사용 가능!
const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <SearchHeader />
      <YoutubeApiContextProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiContextProvider>
    </>
  );
}
