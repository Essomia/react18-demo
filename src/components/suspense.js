import { Suspense } from 'react';

import { Loading, DemoUser, DemoPosts } from '../helpers/demoContent';

/**
 * @topic - Suspense
 */

const DemoSuspense = () => (
    <section>
        <h3 id="suspense" className="head">
            Suspense
        </h3>
        <div className="row">
            <Suspense fallback={<Loading type="user" />}>
                <DemoUser />

                <Suspense fallback={<Loading type="posts" />}>
                    <DemoPosts />
                </Suspense>
            </Suspense>
        </div>
    </section>
);

export default DemoSuspense;
