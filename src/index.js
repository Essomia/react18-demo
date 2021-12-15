import React from 'react';
import ReactDOM from 'react-dom';

import App from './pages/App';

import './index.css';

/**
 * @topic - New Root API
 */

//
// RootAPI for React 17 (before)
//

// const rootElement = document.getElementById('root');
// ReactDOM.hydrate(<App rootAPI={17} />, rootElement);
// ReactDOM.render(<App rootAPI={17} />, rootElement);

//
// RootAPI for React 18 (after)
//

const rootElement = document.getElementById('root');
const rootApp = ReactDOM.createRoot(rootElement, { hydrate: false });

rootApp.render(<App rootAPI={18} />);
