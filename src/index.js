import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './app/app';
import Bubbles from './app/components/bubbles'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<React.Fragment>
	<App />
	<Bubbles />
</React.Fragment>, document.getElementById('root'));
registerServiceWorker();
