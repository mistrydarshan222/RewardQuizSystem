import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from "react-query";
import CoinsContextProvider from "./context/CoinsContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      //other query settings
      refetchOnWindowFocus: false,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <CoinsContextProvider>
  <QueryClientProvider client={queryClient}>

    <App />
  </QueryClientProvider>
  </CoinsContextProvider>
 
);

