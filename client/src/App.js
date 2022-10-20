import * as React from 'react';
import './App.css';
import Footer from '../src/components/footer';
import Header from './components/header';
import { Route, Routes } from 'react-router-dom';
import { StoreProvider } from './utils/GlobalState';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/home';
import Contact from './pages/contact';
import Projects from './pages/projects';
import Disclaimers from './pages/disclaimers';
import Shop from './pages/shop';
import CartPage from './pages/cartPage';
import Detail from "./pages/Detail"
import NotFound from "./pages/404NotFound"

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <div>
       <ApolloProvider client={client}>
       <StoreProvider>
      <Header />
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/shop" element={<Shop />} />
      <Route exact path="/projects" element={<Projects />} />
      <Route exact path="/disclaimers" element={<Disclaimers />} />
      <Route exact path="/cart" element={<CartPage />} />
      <Route exact path="/products/:id" element={<Detail />} />
      <Route exact path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      </StoreProvider>
      </ApolloProvider>
    </div>
  );
}

export default App;