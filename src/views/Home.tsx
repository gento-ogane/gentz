import * as React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Top from './pages/Top';
import Products from './pages/Products';
import About from './pages/About';
import Header from './organisms/Header';
import Footer from './organisms/Footer';
import { headerHeightNum } from '../utils/size';

const Home: React.FC = () => {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Switch>
          <Content>
            <Route exact path='/' component={Top} />
            <Route exact path='/about' component={About} />
            <Route exact path='/products' component={Products} />
            <Redirect to='/' />
          </Content>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

const Content = styled.div`
  display: flex;
  width: 100%;
  min-height: calc(100vh - ${headerHeightNum + 'px'});
`;

export default Home;
