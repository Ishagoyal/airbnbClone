import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ListExample from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ListExample />, document.getElementById('root'));
registerServiceWorker();
