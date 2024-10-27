import { useRef, useState } from "react"

const UncontrolledInput = () => {
    const inputRef = useRef("");
    const value = useRef(0);
    const p = useRef();
    //const input = document.querySelector("#on");
    const [text, setText] = useState("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est perspiciatis illo itaque, soluta sapiente, optio maxime eveniet ullam harum dignissimos numquam sunt labore!")
    const handleFocus = () => {
    //    event.preventDefault();

     //   const form = new FormData(event.target)
     //   const data = Object.fromEntries(form);

      //  alert(data.name)
      let inputElement = inputRef.current
        inputElement.focus();
        console.log(inputRef.current.value)
    };
    const increment = () => {
        //p.current.innerText += "Ciao LoremIpsum"
            setText(text + "Ciao LoremIpsum");
    }
    
    return (
    <>
            <input id="on" ref={inputRef} type="text"/>
            <p > {text} </p>
            <button onClick={handleFocus}>sent the name</button>
            <button onClick={increment}>increment</button>
        
    </> 

    )
        
}

export default UncontrolledInput