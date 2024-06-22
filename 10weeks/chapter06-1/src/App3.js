import {useEffect, useState, useRef } from "react";
import './App.css';
import Viewer from "./component/Viewer";
import Controller from "./component/Controller";
import Even from "./component/Even";


function App() {
  const didMountRef = useRef(false);
  const [ count, setCount ] = useState(0);
  const [text, setText] = useState("");
  const handleSetCount = (value) => {
    setCount(count + value);
  };

  const handleSetText = (e) => {
    setText(e.target.value);
  };

useEffect( ()=>{
  if(!didMountRef){
    didMountRef.current=true;
    return;
  }
  console.log("업데이트:", count, text);
}, [count, text]);

useEffect( ()=>{
  console.log("마운트 되는 시점:");
}, []);



  return (
    <div>
      <h1>Simple Counter2</h1>
      <seciton>
        <input onChange={handleSetText} value={text}/>
      </seciton>
      <section>
        <Viewer count={count}/>
        {count % 2 === 0 && <Even />}
      </section>
      <seciton>
        <Controller handleSetCount={handleSetCount}/>
      </seciton>
    </div>
  );
}

export default App;
