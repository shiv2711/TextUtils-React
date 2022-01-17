import React from "react";

export default function About(props) {
  return (
    <>
      <div>
        <h1 className={`center HeadingBack ${props.mode}`}>ABOUT US</h1>
        <p className={`info justify ${props.mode}`}>
          We provides free tools to help you with your daily tasks.
          <br />
          You will find tools for formatting source code, converters, tools for
          handling text, such as remove extra spaces, uppercase, lowercase and
          many other.
          <br />
          Check the current feature below and feel free to recommend a new
          feature by contacting us.
          <br />
          Fast, Reliable, and easy!
          <br />
          Text-Utils brings severals free online tools to assist developers in
          daily tasks.
          <br />
        </p>
        <h2 className={`center HeadingBack ${props.mode}`}> OUR FEATURES</h2>
        <ul className={`info justify ${props.mode}`}>
          <li>CONVERT TO UPPERCASE</li>
          <li>CONVERT TO LOWERCASE</li>
          <li>REMOVE EXTRASPACES</li>
          <li>COPY THE TEXT</li>
          <li>CLEAR THE TEXT</li>
        </ul>
      </div>
    </>
  );
}
