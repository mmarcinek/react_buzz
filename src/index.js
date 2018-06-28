import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/app';
import Bubbles from './components/bubbles'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div>
      <App />
      <Bubbles />
</div>, document.getElementById('root'));
registerServiceWorker();
