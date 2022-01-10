import { StrictMode } from 'react';
import { bool, number } from 'prop-types';

import ApiUseDeferredValue from '../components/apiDeferredValue';
import ApiUseId from '../components/apiId';
import AutomaticBatching from '../components/automaticBatching';
import Suspense from '../components/suspense';
import Transition from '../components/transition';

import './App.css';

/**
 * @topic - Strict Mode
 */

const App = ({ rootAPI, enableStrict }) => {
    console.log('[R18D]', 'Activate Root API for React with following value:', { rootAPI, enableStrict });

    const childs = [
        <div className="menu">
            <a className="item" href="#automaticbatching">
                Automatic Batching
            </a>
            <a className="item" href="#suspense">
                Suspense
            </a>
            <a className="item" href="#transition">
                Transition
            </a>
            <a className="item" href="#useid">
                useId
            </a>
            <a className="item" href="#usedeferredvalue">
                useDeferredValue
            </a>
        </div>,
        <AutomaticBatching key="automatic-batching" />,
        <Suspense key="suspense" />,
        <Transition key="transition" />,
        <ApiUseId key="use-id" />,
        <ApiUseDeferredValue key="use-deferred-value" />,
    ];

    if (enableStrict) {
        return (
            <StrictMode>
                <div className="header">
                    <h1 className="title">
                        React {rootAPI} <span>Cookbook - Strict Mode</span>
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
    enableStrict: false,
};

App.propTypes = {
    rootAPI: number,
    enableStrict: bool,
};

export default App;
