import { useId } from 'react';

const DemoUseId = () => {
    const uniqueId = useId();

    return (
        <section>
            <h3 id="useid" className="head">
                useId
            </h3>
            <div className="row">
                <div className="field">
                    <label htmlFor={`${uniqueId}-name`}>Name</label>
                    <input type="text" name="name" id={`${uniqueId}-name`} />
                </div>
            </div>
        </section>
    );
};

export default DemoUseId;
