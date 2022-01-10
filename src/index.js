import React from 'react';
import ReactDOM from 'react-dom';

import App from './pages/App';

import './index.css';

/**
 * @topic - Root API
 */

const rootElement = document.getElementById('root');

//
// React 17 (before)
//

// ReactDOM.hydrate(<App rootAPI={17} />, rootElement);
// ReactDOM.render(<App rootAPI={17} />, rootElement);

//
// React 18 (after)
//

const rootApp = ReactDOM.createRoot(rootElement, { hydrate: false });

rootApp.render(<App rootAPI={18} />);
