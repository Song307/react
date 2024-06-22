import {useEffect, useState} from "react";
import './App.css';
import Viewer from "./component/Viewer";
import Controller from "./component/Controller";


function App() {
  const [ count, setCount ] = useState(0);
  const [text, setText] = useState("");
  const handleSetCount = (value) => {
    setCount(count + value);
  };

  const handleSetText = (e) => {
    setText(e.target.value);
  };

useEffect( ()=>{
  console.log("업데이트:", count, text);
}, [count, text]);

  return (
    <div>
      <seciton>
        <Viewer count={count}/>
      </seciton>
      <seciton>
        <Controller handleSetCount={handleSetCount}/>
      </seciton>
    </div>
  );
}

export default App;
