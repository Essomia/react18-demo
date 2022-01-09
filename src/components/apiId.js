import React, { useId } from "react";

function App() {
  // create globally unique dynamic ids
  const id = useId();
  //  create a single base id for the whole form, then derive further ids from that one by appending a suffix.
  return (
    <>
      <div className="field">
        <label htmlFor={`${id}-name`}>Name</label>
        <input type="text" name="name" id={`${id}-name`} />
      </div>
      <div className="field">
        <label htmlFor={`${id}-address`}>Address</label>
        <input type="text" aria-labelledBy={`${id}-name ${id}-address`} />
      </div>
      <div className="field">
        <label htmlFor={`${id}-passport`}>Do you have passport?</label>
        <input type="checkbox" name="passport" id={`${id}-passport`} />
      </div>
    </>
  );
}
