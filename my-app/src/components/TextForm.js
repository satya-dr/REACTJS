import React,{useState} from 'react'
     
    //  console.log(useState('Enter text here2'))
export default function TextForm(props) {
      const [text, setText] = useState("");
      const [prevText, setPrevText] = useState("");
     const handelUpclick = ()=>{
        // console.log("Upper Case Was Clicked" + text);
        let newText = text.toUpperCase();
        setPrevText(text);
        // setText("You are clicked on handelUpclick");
        setText(newText);
        props.showAlert("Converted to UpperCase..!","Success");
     }
     const handelLoclick = ()=>{
      // console.log("Upper Case Was Clicked" + text);
      let newText = text.toLowerCase();
      setPrevText(text);
      // setText("You are clicked on handelUpclick");
      setText(newText);
      props.showAlert("Converted to LowerCase..!","Success");
   }
   const handelClear = ()=>{
    // console.log("Upper Case Was Clicked" + text);
    // let newText = text(' ');
    // setText("You are clicked on handelUpclick");
    setPrevText(text);
    setText(' ');
    props.showAlert("Cleared All Text..","Success");
 }
 const handelSubmit = ()=>{
  // console.log("Upper Case Was Clicked" + text);
    //  let conf= confirm("Are you sure ?");
  // setText("You are clicked on handelUpclick");
     alert(" Your Text is Submited! \n Thank You.....!");
}
const handleUndo = () => {
  setText(prevText); // আগের text restore করো
  setPrevText(""); // একবার undo করলে আবার undo করা যাবে না
  props.showAlert("Undo Successful..!", "Success");
};
     
     const handelOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value)
     }
     const handelCopy = ()=>{
      var text =document.querySelector("#myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text Copied..!","Successfull");
     }
     const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra Space Removed..!","Success ");
     }

    // const [text, setText]=useState('');
    // text ="New Text"// Worng way to change state
    // setText("New Text");// Correct way to change state
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'? 'white':'#042743'}}>
        <h1>{props.heading}  </h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor : props.mode === 'dark'? 'grey':'white',color: props.mode === 'dark'? 'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handelUpclick}>Convert to UpporCase</button>
        <button className="btn btn-primary mx-1" onClick={handelLoclick}>Convert to UpporCase</button>
        <button className="btn btn-primary mx-1" onClick={handelClear}>Clear</button>
        <button className="btn btn-primary mx-1" onClick={handelSubmit}>Submit</button>
        <button className="btn btn-primary mx-1" onClick={handelCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
        <button className="btn btn-primary mx-1" onClick={handleUndo}>Undo Text</button>

    </div>
    <div className="containermy-2" style={{color: props.mode === 'dark'? 'white':'#042743'}}>
      <h1>Yor Text Summary</h1>
      <p> {text.split(" ").length} Words and {text.length} characters</p>
      <p> {0.008 * text.split(" ").length} minutes read </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Something in the textbox above to preview it here!"}</p>
    </div>

    </>
  )
}
