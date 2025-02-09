import React,{useState} from 'react'
     
    //  console.log(useState('Enter text here2'))
export default function TextForm(props) {

     const handelUpclick = ()=>{
        // console.log("Upper Case Was Clicked" + text);
        let newText = text.toUpperCase();
        // setText("You are clicked on handelUpclick");
        setText(newText);
     }
     
     const handelOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value)
     }


    const [text, setText]=useState('Enter text here');
    // text ="New Text"// Worng way to change state
    // setText("New Text");// Correct way to change state
  return (
    <div>
        <h1>{props.heading}  </h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handelOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handelUpclick}>Convert to UpporCase</button>

    </div>
  )
}
