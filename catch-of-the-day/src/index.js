import React from 'react';
import { render } from 'react-dom';  //we don't need the whole package, only the render method!
import { BrowserRouter, Match, Miss } from 'react-router';
import './css/style.css';
import App from './components/App'
import StorePicker from './components/StorePicker'
import NotFound from './components/NotFound'

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={StorePicker} /> {/*When the pattern is exactly a /, aka the home page, the component should be the store picker! */}
        <Match pattern="/store/:storeid" component={App} /> {/*When a store is searched, the app component will render*/}
        <Miss component={NotFound}/>
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.querySelector('#main'));
