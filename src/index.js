import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app.component';

ReactDOM.render(
  <React.StrictMode>
    <div className = "background">
      <App/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


