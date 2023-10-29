import { Fragment } from "react";

const Naikkan = (props) => {
  return (
    <Fragment>
      <div className="items-start justify-center text-center">
        <button
          className="p-4 mx-2 bg-white border-2 shadow-xl rounded-xl"
          onClick={() => {
            props.naikkanLimit();
          }}
        >
          Naikkan Limit
        </button>
        <button
          className="p-4 mx-2 bg-white border-2 shadow-xl rounded-xl"
          onClick={() => {
            props.turunkanLimit();
          }}
        >
          Turunkan Limit
        </button>
      </div>
      <div className="items-start justify-center text-center">
        <input
          className="p-5 m-10 text-2xl font-semibold bg-white border-2 shadow-2xl rounded-xl"
          ref={props.inputNameRef}
          defaultValue={props.inputNameRef.current}
          //   onClick={() => {
          //     props.handleInput();
          //   }}
        />
        <h1 className="items-center justify-center p-4 my-10 text-2xl font-black text-center border-b-2">
          {props.getName}
        </h1>
      </div>
    </Fragment>
  );
};

export default Naikkan;
