import { useCallback, useState } from 'react';

function fetchSomething(delay = 1000, error = false) {
    return new Promise((resolve, reject) => {
        if (error) {
            setTimeout(reject, delay);
        } else {
            setTimeout(resolve, delay);
        }
    });
}

let counterRender = 0;

/**
 * @topic - Automatic Batching
 */

const AutomaticBatching = () => {
    counterRender += 1;

    console.log(
        '[R18D]',
        'With StrictMode, the logging should be doubled since StrictMode double-invokes effects (eg: mount -> unmount -> mount).',
    );

    //
    // Automatic Batching with plain function
    //

    const [countValue, setCountValue] = useState(0);
    const [toggleFeature, setToggleFeature] = useState(false);

    const onClickHandler = () => {
        setCountValue(countValue + 1);
        setToggleFeature(!toggleFeature);
    };

    //
    // Automatic Batching with Hooks
    //

    const [countValueByHooks, setCountValueByHooks] = useState(0);
    const [toggleFeatureByHooks, setToggleFeatureByHooks] = useState(false);

    const onClickHooksHandler = useCallback(() => {
        setCountValueByHooks(countValueByHooks + 1);
        setToggleFeatureByHooks(!toggleFeatureByHooks);
    }, [countValueByHooks, toggleFeatureByHooks]);

    //
    // Automatic Batching for Promise/Fetch
    //

    const [countValueByPromise, setCountValueByPromise] = useState(0);
    const [toggleFeatureByPromise, setToggleFeatureByPromise] = useState(false);

    const onClickPromiseHandler = () => {
        fetchSomething().then(() => {
            setCountValueByPromise(countValueByPromise + 1);
            setToggleFeatureByPromise(!toggleFeatureByPromise);
        });
    };

    return (
        <section>
            <h3 className="head">
                Automatic Batching
                <span className="render-count">{counterRender}</span>
            </h3>
            <div className="row">
                {/* // Automatic Batching with plain function */}
                <div className="cell centered">
                    <button type="button" onClick={onClickHandler}>
                        Update datas with plain function
                    </button>
                    <p>
                        Count Click
                        <span className="render-count">{countValue}</span>
                    </p>
                    <p>
                        Toggle Feature
                        <span className="render-count">{toggleFeature.toString()}</span>
                    </p>
                </div>

                {/* // Automatic Batching with Hooks */}
                <div className="cell centered">
                    <button type="button" onClick={onClickHooksHandler}>
                        Update datas with Hooks
                    </button>
                    <p>
                        Count Click For Hooks
                        <span className="render-count">{countValueByHooks}</span>
                    </p>
                    <p>
                        Toggle Feature For Hooks
                        <span className="render-count">{toggleFeatureByHooks.toString()}</span>
                    </p>
                </div>

                {/* // Automatic Batching for Promise/Fetch */}
                <div className="cell centered">
                    <button type="button" onClick={onClickPromiseHandler}>
                        Update datas with Promise
                    </button>
                    <p>
                        Count Click For Promise
                        <span className="render-count">{countValueByPromise}</span>
                    </p>
                    <p>
                        Toggle Feature For Promise
                        <span className="render-count">{toggleFeatureByPromise.toString()}</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AutomaticBatching;
