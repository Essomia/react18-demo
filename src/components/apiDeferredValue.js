/* eslint-disable react/prop-types */
import { useState, useDeferredValue } from 'react';

import { fetch } from 'react-fetch';

const PostsList = ({ text }) => {
    const subreddit = 'reactjs';
    const json = fetch(`https://www.reddit.com/r/${subreddit}.json`).json();
    const posts = json.data.children.map((child) => child.data);

    if (text) {
        return <p>{text}</p>;
    }

    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
};

const App = () => {
    const [text, setText] = useState('hello');
    const deferredText = useDeferredValue(text, { timeoutMs: 2000 });

    const handleChange = (value) => {
        setText(value);
    };

    return (
        <div className="App">
            {/* Keep passing the current text to the input */}
            <input value={text} onChange={handleChange} />

            {/* But the list is allowed to "lag behind" when necessary */}
            <PostsList text={deferredText} />
        </div>
    );
};

export default App;
