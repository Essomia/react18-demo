/* eslint-disable camelcase, react/prop-types */
import {
 useState, useTransition, Suspense, unstable_useCacheRefresh,
} from 'react';

import { fetch } from 'react-fetch';

const Picker = ({ value, onChange, options }) => (
    <select onChange={(event) => onChange(event.target.value)} value={value}>
        {options.map((option) => (
            <option value={option} key={option}>
                {option}
            </option>
        ))}
    </select>
);

const Posts = ({ subreddit }) => {
    const json = fetch(`https://www.reddit.com/r/${subreddit}.json`).json();
    const posts = json.data.children.map((child) => child.data);

    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
};

const App = () => {
    const [subreddit, setSubreddit] = useState('reactjs');
    const refresh = unstable_useCacheRefresh();

    const [isPending, startTransition] = useTransition();

    // // Urgent: Show what was typed
    // setInputValue(input);

    // // Mark any state updates inside as transitions
    // startTransition(() => {
    //     // Transition: Show the results
    //     setSearchQuery(input);
    // });

    const onClickHandler = () => {
        startTransition(() => {
            refresh();
        });
    };

    if (isPending) {
        return 'Loading...';
    }

    return (
        <>
            <Picker value={subreddit} onChange={setSubreddit} options={['reactjs', 'frontend']} />
            <button type="button" onClick={onClickHandler}>
                Refresh
            </button>

            <div style={{ opacity: isPending ? 0.5 : 1 }}>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Posts subreddit={subreddit} />
                </Suspense>
            </div>
        </>
    );
};

export default App;
