import Buttons from "./Buttons";
// import Home from "./Home";
// import Project from "./Project";
import './style.css';

import { useState } from "react";

function App() {

  const [num, setNum] = useState(0);
  // const [kuba, setKuba] = useState('Kubanychbek');
  // const [text, setText] = useState('Hello world!');

  return (
    <div>

      <Buttons num={num} setNum={setNum} />

      {/* <Project kuba={kuba} setKuba={setKuba} />

      <Home text={text} setText={setText} /> */}

    </div>
  );
}

export default App;
