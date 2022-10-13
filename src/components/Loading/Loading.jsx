import React, { useState } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import FadeLoader from "react-spinners/FadeLoader";
import MoonLoader from "react-spinners/MoonLoader";
import BeatLoader from "react-spinners/BeatLoader";


export const Loading = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#36d7b7");
  const override = {
    display: "block",
    margin: "0 auto",
  };


  return (
    <div className="sweet-loading">
      <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" />

      <MoonLoader speedMultiplier={0.50} size={'50'} color={color} loading={loading} cssOverride={override} />
    </div>
  )
}
