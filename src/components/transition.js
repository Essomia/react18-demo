import { Suspense, useState, useTransition } from 'react';

import { getNextPost, Loading, DemoPost } from '../helpers/demoContent';

/**
 * @topic - Transition
 */

let postId = 1;

const DemoTransition = () => {
    const [content, setContent] = useState(getNextPost(postId));
    const [isTransiting, startTransition] = useTransition();

    const onClickHandler = () => {
        startTransition(() => {
            postId = postId >= 100 ? 1 : postId + 1;

            setContent(getNextPost(postId));
        });
    };

    return (
        <section>
            <h3 className="head">Transition</h3>
            <div className="row">
                <button disabled={isTransiting} onClick={onClickHandler}>
                    Load next post
                </button>

                <Suspense fallback={<Loading type="post" />}>
                    <DemoPost resource={content} isTransiting={isTransiting} />
                </Suspense>
            </div>
        </section>
    );
};

export default DemoTransition;
