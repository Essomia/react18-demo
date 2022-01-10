import { useDeferredValue, useState, memo } from 'react';
import { shape, string } from 'prop-types';

const ListItem = ({ children }) => {
    const now = performance.now();

    while (performance.now() - now < 1) {
        // Note: this is an INTENTIONALLY EMPTY loop that
        // DOES NOTHING for 3 milliseconds for EACH ITEM.
        //
        // It's meant to emulate what happens in a deep
        // component tree with calculations and other
        // work performed inside components that can't
        // trivially be optimized or removed.
    }

    return <div className="ListItem">{children}</div>;
};

ListItem.propTypes = {
    children: shape(),
};

const MySlowList = memo(({ text }) => {
    const items = [];

    if (!text) {
        return null;
    }

    for (let i = 0; i < 50; i += 1) {
        items.push(
            <ListItem key={i}>
                <p>{`Result #${i} for "${text}"`}</p>
            </ListItem>,
        );
    }

    return (
        <>
            <p>
                <b>{`Results for ${text}:`}</b>
            </p>

            <ul className="List">{items}</ul>
        </>
    );
});

MySlowList.propTypes = {
    text: string,
};

const DemoDeferedValue = () => {
    const [text, setText] = useState('hello');

    const deferredText = useDeferredValue(text, {
        timeoutMs: 5000,
    });

    const onClickHandler = (event) => {
        setText(event.target.value);
    };

    return (
        <section>
            <h3 className="head">useDeferredValue</h3>

            <div className="row">
                <input value={text} onChange={onClickHandler} />
                <MySlowList text={deferredText} />
            </div>
        </section>
    );
};

export default DemoDeferedValue;
