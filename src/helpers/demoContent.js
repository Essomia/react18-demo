import { bool, shape, string } from 'prop-types';

import fetchWrapper from './fakeDelayApi';

export const resources = {
    users: fetchWrapper('https://jsonplaceholder.typicode.com/users', 1000),
    user: fetchWrapper('https://jsonplaceholder.typicode.com/users/8', 1000),
    posts: fetchWrapper('https://jsonplaceholder.typicode.com/posts', 5000),
    post: fetchWrapper('https://jsonplaceholder.typicode.com/posts/10', 2000),
};

export const getNextPost = (id) => fetchWrapper(`https://jsonplaceholder.typicode.com/posts/${id || 1}`);

export const Loading = ({ type = '' }) => {
    console.log('Loading ', type, '...');

    return <div>Loading...</div>;
};

Loading.propTypes = {
    type: string,
};

export const DemoUsers = ({ resource = resources.users }) => {
    const datas = resource.read();

    return (
        <ul>
            {datas.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.username}
                </li>
            ))}
        </ul>
    );
};

DemoUsers.propTypes = {
    resource: shape(),
};

export const DemoUser = ({ resource = resources.user }) => {
    const datas = resource.read();

    return <h4>{datas.name}</h4>;
};

DemoUser.propTypes = {
    resource: shape(),
};

export const DemoPosts = ({ resource = resources.posts }) => {
    const datas = resource.read();

    return (
        <ul>
            {datas.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
};

DemoPosts.propTypes = {
    resource: shape(),
};

export const DemoPost = ({ resource = resources.post, isTransiting = false }) => {
    const post = resource.read();

    return (
        <div style={{ opacity: isTransiting ? 0.5 : 1 }}>
            <h4>
                {post.id} - {post.title}
            </h4>

            <p>{post.body}</p>
        </div>
    );
};

DemoPost.propTypes = {
    resource: shape(),
    isTransiting: bool,
};
