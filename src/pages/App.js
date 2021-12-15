import { StrictMode } from 'react';
import { bool, number } from 'prop-types';

import './App.css';

const App = ({ rootAPI, enableStrict }) => {
    console.log('[R18D]', 'Activate Root API for React with following value:', { rootAPI, enableStrict });

    const childs = '';

    if (enableStrict) {
        return (
            <StrictMode>
                <div className="header">
                    <h1 className="title">
                        React {rootAPI} <span>Cookbook Strict</span>
                    </h1>
                </div>
                {childs}
            </StrictMode>
        );
    }

    return (
        <>
            <div className="header">
                <h1 className="title">
                    React {rootAPI} <span>Cookbook</span>
                </h1>
            </div>
            {childs}
        </>
    );
};

App.defaultProps = {
    rootAPI: 15,
    enableStrict: true,
};

App.propTypes = {
    rootAPI: number,
    enableStrict: bool,
};

export default App;
