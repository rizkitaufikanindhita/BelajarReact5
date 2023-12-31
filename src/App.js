// parent
import { useState, useEffect, useRef } from "react";
import Testing from "./components/Testing";
import Naikkan from "./components/Naikkan";

function App() {
  const [getLimit, setLimit] = useState(1);

  const [getName, setName] = useState("Pengadaan Komputer");

  const inputNameRef = useRef(getName); // useRef() digunakan untuk mengambil value dari input (best practice)

  useEffect(() => {
    if (getLimit > 10) {
      setName(inputNameRef.current.value);
    } else {
      setName("Pengadaan Komputer");
    }
  }, [getLimit]);

  const naikkanLimit = () => {
    setLimit(getLimit + 1);
  };
  const turunkanLimit = () => {
    getLimit === 1
      ? alert("Limit tidak boleh kurang dari 1 M Dollar")
      : setLimit(getLimit - 1);
  };

  return (
    <>
      <h1 className="items-center justify-center my-10 text-2xl text-center">
        {getLimit} M Dollar
      </h1>
      <Naikkan
        naikkanLimit={naikkanLimit}
        turunkanLimit={turunkanLimit}
        getName={getName}
        inputNameRef={inputNameRef}
      />
      <Testing />
    </>
  );
}

export default App;
