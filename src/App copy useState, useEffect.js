// parent
import { useState, useEffect } from "react";
import Testing from "./components/Testing";
import Naikkan from "./components/Naikkan";

function App() {
  const [getLimit, setLimit] = useState(1);

  const [getName, setName] = useState("Pengadaan Komputer");

  const [getNewName, setNewName] = useState("");

  const handleInput = (e) => {
    setNewName(e.target.value);
  };
  // handleInput dipasang diinput di Naikkan.js

  useEffect(() => {
    if (getLimit > 10) {
      setName(getNewName);
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
      <h1 className="text-2xl items-center justify-center text-center my-10">
        {getLimit} M Dollar
      </h1>
      <Naikkan
        naikkanLimit={naikkanLimit}
        turunkanLimit={turunkanLimit}
        getName={getName}
        handleInput={handleInput}
      />
      <Testing />
    </>
  );
}

export default App;
