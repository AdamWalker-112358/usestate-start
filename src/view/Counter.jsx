import React, { useState } from "react";

export default function Counter({ item }) {
  const [count, setCount] = useState(0)
  return (
    <div className="hbox space-between mt20">
      <h3 className="paragraph"> {item} counter: {count}</h3>
      <button className="button" onClick={() => setCount(count + 1)}> Add {item}</button>
    </div>
  )
}

