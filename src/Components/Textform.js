import React, {useState} from 'react'

export default function Textform(props) {
  /// Textform Start ///
  
  const handleUpClick =()=> {
    console.log('Uppercase was clicked'+ text)
    setText('you have clicked on handleUpClick')
    let newText= text.toUpperCase();
    setText(newText);
  }
  const handleOnChange =(event)=>{
    console.log('On change')
    setText(event.target.value)
  }
  const handleLoClick =()=>{
    console.log('Lowercase was clicked')
    let newText= text.toLowerCase();
    setText(newText);
  }
  const handleclearClick =()=>{
    console.log('Clear Text was clicked')
    let newText= '';
    setText(newText);
  }
  const[text,setText]=useState('');
  return (
    
    <>
    <div>
      <h1>{props.heading}</h1>
      
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
    </div>
    <button className='btn btn-primary mx-1' onClick={handleUpClick} >convert to uppercase</button>
    <button className='btn btn-primary mx-1' onClick={handleLoClick} >convert to lowercase</button>
    <button className='btn btn-primary mx-1' onClick={handleclearClick} >Clear Text</button>

          
    </div>
    <div className="container mx-2">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
