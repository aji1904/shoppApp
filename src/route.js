import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './component/home';
import List from './component/listProduk'
import Detail from './component/detailProduk';
import Article from './component/article';
import DetailArticle from './component/detailArtikel'
import About from './component/about';
import Contact from './component/contact';


export default function BasicExample() {
    return (
      <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/produk">
              <List />
            </Route>
            <Route path="/produk-detail">
              <Detail />
            </Route>
            <Route path="/artikel">
              <Article />
            </Route>
            <Route path="/artikel-detail">
              <DetailArticle />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
      </Router>
    );
  }