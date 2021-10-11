import React, {useState} from 'react'

export default function TextForm(props) {

    const[text,setText] = useState('');
    
    const handleUpClick = ()=>{
     let upperCase = text.toUpperCase();
     setText(upperCase);
     props.showAlert('Uper Case has been converted','success');
    };

    const handleLoClick = ()=>{
        let lowerCase = text.toLowerCase();
        setText(lowerCase);
        props.showAlert('Lower Case has been converted','success');

    };

    const handleClearTextClick = ()=>{
       let compText =  '';
        setText(compText);
    };

    const handleFLCClick = ()=>{
        const words = text.split(" ");
      for (let i = 0; i < words.length; i++) {
        if (words[i] !=='' && words[i] !== undefined) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }
      }
     let capitalizeWord =  words.join(" ");
      setText(capitalizeWord);
    };

    const handleOnChnage = (event)=>{
       setText(event.target.value);
    };

    const handleCopyCClick = ()=>{
        let txt = document.getElementById('myBox');
        txt.select();
        navigator.clipboard.writeText(txt.value);
    };

    const handleESCClick= ()=>{
         let comText = text.split(/[ ]+/);
         setText(comText.join(" "));
    };

    
    // text='new Text'; // Wrong way to change the state
    // setText("This is new Text"); // Correct way to change the state

    return (
        <>
        <div>
            <h1 style={{color:props.mode === 'dark'?'white':'black' }} >{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="myBox" value={text} onChange={handleOnChnage} style={{backgroundColor:props.mode === 'dark'?'gray':'white',
            color:props.mode === 'dark'?'white':'black' }} 
             rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearTextClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleFLCClick}>First Capitilize</button>
            <button className="btn btn-primary mx-1" onClick={handleCopyCClick}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleESCClick}>Remove Extra Space</button>
        </div>
        <div className="container my-2" style={{color:props.mode === 'dark'?'white':'black' }}>
            <h1>Your text summary</h1>
            <p><b>{text.split(' ').length-1}</b> Words AND <b>{text.length}</b> Characters</p>
            <p><b>{.008 * (text.split(' ').length-1)}</b> Minuets Read</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text : 'Enter something to preview here' }</p>
        </div>
        </>
    )
}
