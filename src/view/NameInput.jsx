import React, { useState, useEffect, useRef } from "react";

export default function NameInput(){
  const [name, setName] = useState("???")
  const [age, setAge] = useState(34)
  const input = useRef(null)

  useEffect(() => {
    console.log('No dependencies')
  })
  useEffect(() => {
    console.log('Empty dependencies array')
  },[])
  useEffect(() => {
    console.log('Age dependencies')
  },[age])
  
  return (
    <div className="vbox mt20">
      <div className="hbox space-between">
        <h1 className="paragraph">What is your name?</h1>
        <input
          ref={input}
          type="text"
          className="input cap"
          placeholder="Your name here..."
          onChange={() => { setName(input.current.value); if(name.length >= 2) setAge(name.length)}}
        />
      </div>
      <br />
      <h3 className="paragraph text-left white-text cap"> Your answer: {name} </h3>
    </div>
  );
}

