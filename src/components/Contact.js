import React from "react";

export default function Contact(props) {
  return (
    <div>
      <>
        <div>
          <h1 className={`center HeadingBack ${props.mode}`}>CONTACT US</h1>
              <form action="/">
                <div className="form-group">
                  <label className={`${props.mode}`} htmlFor="name">Name: </label>
                  <input className={`${props.mode}`} type="text" name="name" id="name" placeholder="Enter your name"
                  />
                </div>
                <div className="form-group">
                  <label className={`${props.mode}`} htmlFor="name">Locality: </label>
                  <input className={`${props.mode}`} type="text" name="Locality" id="Locality" placeholder="Enter your Locality"/>
                </div>
                <div className="form-group">
                  <label className={`${props.mode}`} htmlFor="name">Email: </label>
                  <input className={`${props.mode}`} type="text" name="Email" id="Email" placeholder="Enter your Email"/>
                </div>
                <div className="form-group">
                  <label className={`${props.mode}`} htmlFor="name">Phone Number: </label>
                  <input className={`${props.mode}`} type="text" name="Phone Number" id="Phone Number" placeholder="Enter your Phone Number"/>
                </div>
                <div className="form-group">
                  <label className={`${props.mode}`} htmlFor="name">Message: </label>
                  <textarea className={`${props.mode}`} name="message" id="message" cols="30" rows="10"></textarea>
                </div>
                  <button className={`subBtn ${props.mode}`} style= {{margin:'auto'}} >SUBMIT</button>
              </form>
        </div>
      </>
    </div>
  );
}
