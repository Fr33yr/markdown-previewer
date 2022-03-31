import React,{Fragment, useState} from "react";
import { Remarkable } from "remarkable";
import './App.css'


const md = new Remarkable();

const content = `

# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

**This is bolded text**
> Block Quotes!

-list item 1
-list item 2
-list item 3

[Visit my website](#)

This is a inline \'<div></div>\'


This is a block of code 

\'\'\'
while (i < 10) {
  text += "The number is " + i;
  i++;
}
\'\'\'

![React](https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png)

`;

export function App(){

  const [text, setText] = useState(content);
  const [maxedit, setMaxEdit] = useState(false);
  const [maxprev, setMaxPrev] = useState(false);

  return(

    <Fragment>

        <div className={ maxprev ? "hide-editor max-editor" : "editor-container"}>
          <div className="editor-toolbar">Toolbar<i onClick={()=> setMaxEdit(!maxedit)} className={maxedit ? "fa-solid fa-minimize" : "fa-solid fa-up-down-left-right"}></i></div>
          <textarea name="textarea" className={ maxedit ? "editor-max" : "editor"} id="editor" value={text} onChange={(e) => setText(e.target.value)} cols="30" rows="10"></textarea>
        </div>

        <div className={maxedit ? "hide-previewer" : "previewer-container"}>
          <div className="previewer-toolbar">Toolbar<i onClick={()=> setMaxPrev(!maxprev)} className={maxprev ? "fa-solid fa-minimize" : "fa-solid fa-up-down-left-right"}></i></div>
          <div className="previewer" id="preview" dangerouslySetInnerHTML={{ __html: md.render(text) }}></div>
        </div>

        <footer><a href="https://github.com/Fr33yr/markdown-previewer" target={"_blank"} rel={"noopener noreferrer"}>Code</a></footer>
    </Fragment>
  )
}

// <i className="fa-solid fa-minimize"></i> minimize icon
// <i className="fa-solid fa-up-down-left-right"></i> maximize icon