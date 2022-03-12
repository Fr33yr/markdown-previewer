import React,{Fragment} from "react";
import './App.css'


export function App(){

  return(

    <Fragment>

      <div className="editor-container">
        <div className="editor-toolbar">Toolbar</div>
        <textarea id="editor" type="text">asd</textarea>
      </div>
      <div className="converter"></div>
      <div className="previewer-container">
        <div className="previewer-toolbar">Toolbar</div>
        <div id="preview">
          <h1>Here goes the title</h1>
          <h2>This is a sub title</h2>
          <h3>And here goes other cool stuff</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, repellendus.</p>
          <pre>
            <code>
              {/* some code goes here */}
            </code>
          </pre>
          <p>
            Lorem ipsum dolor
            <br/>sit amet.
            <br/>sit amet.
            <br/>sit amet. 
          </p>
          <p>There also <a href="#">Links</a></p>
          <blockquote>Blockquotes!</blockquote>
          <p>And if you like some tables to.</p>
          <ul>
            <li>And of course there lists
              <ul>
                <li>some are bulleted.
                  <ul>
                    <li>With diferent identation levels
                      <ul>
                        <li>That looks like this.</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>1.And there are numbered lists too.</li>
            <li>2.And there are numbered lists too.</li>
          </ul>
          <img src="" alt="" />
        </div>
      </div>
    </Fragment>
  )
}