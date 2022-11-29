//1-вариант
// import React from "react";
// import "./App.css";

// function App() {


//   let a = 5;

//   let textInput = React.createRef()
//   let textOut = React.createRef()

//   const onAdd =  (props) => {
    
//     console.log('Home work' + props);
//   }

//   const showInput = (event) =>{
//     console.log('input');
//     // console.log(event.target.value);
//     console.log(textInput.current.value)
//     textOut.current.innerHTML = textInput.current.value

//   }
//   return (
//     <>
//       <h1> Home work 5</h1>
//       <section>
//       <h2>Клик</h2>
//       <button onClick={() => onAdd(4)}> Push </button>
//       </section>

//       <section>
//       <h2>Двойной клик </h2>
//       <div className="btn" onDoubleClick={() => onAdd(5)} > Щелкните дважды </div>
//       </section>

//       <section>
//       <h2>Input </h2>
//       <input type = 'text' onInput={showInput} ref = {textInput}  />
//       <p ref={textOut}> </p>
//       </section>

     
//     </>
//   );
// }

// export default App;

//2-вариант
import React, { useState } from "react";
import "./App.css";


function App() {


  let a = 5;

  let textInput = React.createRef()
  let textOut = React.createRef()
  const [outPut, setOutput] = useState ('0')

  const onAdd =  (props) => {
    
    console.log('Home work' + props);
  }

  const showInput = (event) =>{
    console.log('input');
    // console.log(event.target.value);
    console.log(textInput.current.value)
    textOut.current.innerHTML = textInput.current.value
    setOutput(textInput.current.value)

  }
  return (
    <>
      <h1> Home work 5</h1>
      <section>
      <h2>Клик</h2>
      <button onClick={() => onAdd(4)}> Push </button>
      </section>

      <section>
      <h2>Двойной клик </h2>
      <div className="btn" onDoubleClick={() => onAdd(5)} > Щелкните дважды </div>
      </section>

      <section>
      <h2>Input </h2>
      <input type = 'text' onInput={showInput} ref = {textInput}  />
      <p ref={textOut}> </p>
      <h3> {outPut}</h3>
      </section>

     
    </>
  );
}

export default App;