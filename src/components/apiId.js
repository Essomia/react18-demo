import { useId } from 'react';

const DemoUseId = () => {
    const uniqueId = useId();

    return (
        <section>
            <h3 className="head">UseId</h3>
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
