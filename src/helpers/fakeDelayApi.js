function wrapPromise(promise, delay) {
    let status = 'pending';
    let result;

    const suspender = promise.then(
        (r) => {
            setTimeout(() => {
                status = 'success';
                result = r;
            }, delay);
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
}

async function fetchUrl(url) {
    // eslint-disable-next-line no-undef
    const response = await fetch(url);
    const datas = await response.json();

    return datas;
}

export default function fetchWrapper(url, delay = 1000) {
    const promise = fetchUrl(url);

    return wrapPromise(promise, delay);
}
