import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import Main from './components/organisms/Main';
import registerServiceWorker from './registerServiceWorker';

// Global styles
import './styles/theme.scss';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
