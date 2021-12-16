import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';

import 'normalize.css';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
