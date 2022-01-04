const wrapPromise = (promise) => {
    let status = 'pending';
    let result;

    const suspender = promise.then(
        (r) => {
            status = 'success';
            result = r;
        },
        (e) => {
            status = 'error';
            result = e;
        },
    );

    return {
        read() {
            if (status === 'pending') {
                throw suspender;
            } else if (status === 'error') {
                throw result;
            } else if (status === 'success') {
                return result;
            }

            return null;
        },
    };
};

const fetchPosts = () => {
    console.log('Fetch posts...');

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Fetched posts');

            resolve([
                {
                    id: 0,
                    text: 'I get by with a little help from my friends',
                },
                {
                    id: 1,
                    text: "I'd like to be under the sea in an octupus's garden",
                },
                {
                    id: 2,
                    text: 'You got that sand all over your feet',
                },
            ]);
        }, 1100);
    });
};

const fetchUser = () => {
    console.log('Fetch user...');

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Fetched user');

            resolve({
                name: 'Ringo Starr',
            });
        }, 1000);
    });
};

export default () => {
    const userPromise = fetchUser();
    const postsPromise = fetchPosts();

    return {
        user: wrapPromise(userPromise),
        posts: wrapPromise(postsPromise),
    };
};
