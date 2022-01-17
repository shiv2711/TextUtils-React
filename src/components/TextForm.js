import React, {useState} from 'react';
import PropTypes from 'prop-types';


export default function TextForm(props) {

    // FOR FUNCTIONALITIES

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text Has Been Converted To UpperCase","success");
    }
    
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text Has Been Converted To LowerCase","success");
    }
    
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text Has Been Cleared","warn");
    }
    
    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text Has Been Copied","success");

    }
    
    const handleRES = ()=>{
        setText(text.split(/\s+/g).join(" "));
        props.showAlert("Extra Spaces Fron Text Has Been Removed","success");
    }

    const [text, setText] = useState('');

    return (
        <>
            <div>
                <h1>{props.heading}</h1>
                <div className="utility" >
                    <textarea name="MainText" value={text} onChange={handleOnChange} id="mainText"rows="10"></textarea>
                    <div className='btnDiv'>
                        <button disabled={text.length === 0} className={`btn ${props.mode}`} onClick={handleUpClick}>UPPERCASE</button>
                        <button disabled={text.length === 0} className={`btn ${props.mode}`} onClick={handleLoClick}>LOWERCASE</button>
                        <button disabled={text.length === 0} className={`btn ${props.mode}`} onClick={handleClearClick}>CLEAR</button>
                        <button disabled={text.length === 0} className={`btn ${props.mode}`} onClick={handleCopy}>COPY</button>
                        <button disabled={text.length === 0} className={`btn ${props.mode}`} onClick={handleRES}>REMOVE EXTRA SPACES</button>
                    </div>
                </div>
            </div>
            <div>
                <h2 className={`center HeadingBack ${props.mode}`}>Your Text Summary.</h2>
                <p className={`justify ${props.mode}`} style = {{color : '#d0adad'}} >{text.trim().split(/\s+/).filter((element)=>{return element.length !== 0}).length} Words and {text.replace(/\s/g,"").length} characters.</p>
                <p className={`justify ${props.mode}`} style = {{color : '#d0adad'}} >{ (0.008 * text.trim().split(/\s+/).filter((element)=>{return element.length !== 0}).length).toFixed(2) } Minutes read.</p>
                <h2 className={`center HeadingBack ${props.mode}`}>PREVIEW</h2>
                <p className={`justify ${props.mode}`} style = {{color : '#d0adad'}} >{text.length > 0 ? text : "Nothing To Preview !"}</p>
            </div>
        </>
    )
}

TextForm.propTypes = {
    heading : PropTypes.string.isRequired
};

TextForm.defaultProps = {
    heading : 'ENTER TEXT BELOW'
};