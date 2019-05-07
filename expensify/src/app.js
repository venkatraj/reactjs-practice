import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import 'normalize.css'
import './styles/style.scss'

const ExpenseDashboardPage = () => (
  <div>
    ExpenseDashboardPage
  </div>
)

const AddExpensePage = () => (
  <div>
    AddExpensePage
  </div>
)

const EditExpensePage = () => (
  <div>
    EditExpensePage
  </div>
)

const HelpPage = () => (
  <div>
    HelpPage
  </div>
)

const NotFound = () => (
  <div>
    NotFound
  </div>
)

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpenseDashboardPage} exact />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFound} />
    </div>
  </BrowserRouter>
)

ReactDOM.render(
  routes,
  document.getElementById('app')
)