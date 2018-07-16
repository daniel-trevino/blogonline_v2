import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import Frontpage from './components/pages/Frontpage';
import registerServiceWorker from './registerServiceWorker';

// Global styles
import './styles/theme.scss';

ReactDOM.render(<Frontpage />, document.getElementById('root'));
registerServiceWorker();
