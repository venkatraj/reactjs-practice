import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import Home from '../components/Home'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import PortfolioItem from '../components/PortfolioItem'
import Contact from '../components/Contact'
import NotFound from '../components/NotFound'


const PortfolioApp = () => (
  <div>

    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} exact />
          <Route path="/portfolio/:id" component={PortfolioItem} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
)

export default PortfolioApp