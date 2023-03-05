import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../components/App';

document.addEventListener('DOMContentLoaded', () => {
  const appContainer = document.createElement('div');
  document.body.appendChild(appContainer);
  // ...
  const root = ReactDOM.createRoot(appContainer);
  root.render(
    <Router>
      <Route path="/" component={App} />
    </Router>
  );
});
