import { useCallback, useState } from 'react';

/**
 * @topic - Automatic Batching
 */

let counterRender = 0;

const DemoAutomaticBatching = () => {
    counterRender += 1;

    const [countRenderPlain, setCountRenderPlain] = useState(0);
    const [countRenderForHooks, setCountRenderForHooks] = useState(0);
    const [countRenderForPromise, setCountRenderForPromise] = useState(0);

    const [toggleFeature, setToggleFeature] = useState(false);

    const onClickHandler = () => {
        setCountRenderPlain(countRenderPlain + 1);
        setToggleFeature(!toggleFeature);
    };

    const onClickHooksHandler = useCallback(() => {
        setCountRenderForHooks(countRenderForHooks + 1);
        setToggleFeature(!toggleFeature);
    }, [countRenderForHooks, toggleFeature]);

    const onClickFetchHandler = async () => {
        // eslint-disable-next-line no-undef
        await fetch('https://jsonplaceholder.typicode.com/todos/18').then(() => {
            setCountRenderForPromise(countRenderForPromise + 1);
            setToggleFeature(!toggleFeature);
        });
    };

    return (
        <section>
            <h3 id="automaticbatching" className="head">
                Automatic Batching
                <span className="render-count">{counterRender}</span>
            </h3>
            <div className="row">
                <div className="cell">
                    <button type="button" onClick={onClickHandler}>
                        Action Plain Update
                    </button>
                    <button type="button" onClick={onClickHooksHandler}>
                        Action Hooks Update
                    </button>
                    <button type="button" onClick={onClickFetchHandler}>
                        Action Fetch Update
                    </button>
                </div>
                <div className="cell">
                    <p>
                        <span className="label">Count Render Plain</span>
                        <span className="render-count">{countRenderPlain}</span>
                    </p>
                    <p>
                        <span className="label">Count Render Hooks</span>
                        <span className="render-count">{countRenderForHooks}</span>
                    </p>
                    <p>
                        <span className="label">Count Render Fetch</span>
                        <span className="render-count">{countRenderForPromise}</span>
                    </p>
                    <p>
                        <span className="label">Toggle Feature</span>
                        <span className="render-count">{toggleFeature.toString()}</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default DemoAutomaticBatching;
